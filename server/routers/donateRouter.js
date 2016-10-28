require('dotenv').config()
const paypal = require('paypal-rest-sdk')
const donateRouter = require('express').Router()
const donateController = require('../controllers/donateController')

paypal.configure({
  'mode': 'sandbox',
  'client_id': process.env.paypal_clientId,
  'client_secret': process.env.paypal_secret
})

// donateRouter.route('/')
//   .get(donateController.GET_TOKEN)
//   .post(donateController.POST_DONATION)

donateRouter.route('/create')
  .get(function (req, res) {
    console.log('req create', req)
    // build PayPal payment request
    var payReq = {
      'intent': 'sale',
      'redirect_urls': {
        'return_url': 'http://localhost:8000/api/donate/thankyou',
        'cancel_url': 'http://localhost:8000/api/donate'
      },
      'payer': {
        'payment_method': 'paypal'
      },
      'transactions': [{
        'amount': {
          'total': req.query.total,
          'currency': 'USD'
        },
        'description': 'This is the payment transaction description.'
      }]
    }

    paypal.payment.create(payReq, function (error, payment) {
      if (error) {
        console.error(error)
      } else {
        // capture HATEOAS links
        var links = {}
        payment.links.forEach(function (linkObj) {
          links[linkObj.rel] = {
            'href': linkObj.href,
            'method': linkObj.method
          }
        })
        console.log('Create Payment Respone', links)
      // if redirect url present, redirect user
        if (links.hasOwnProperty('approval_url')) {
          res.json({approval_url: links['approval_url'].href})
          // res.redirect(links['approval_url'].href);
        } else {
          console.error('no redirect URI present')
        }
      }
    })
  })
// /v1/payments/payment/payment_id/execute
// http://localhost:8000/donate/thankyou?paymentId=PAY-5FY90116FD970821ALAJWQZI&token=EC-1RM46313040886220&PayerID=BQ7W27DVMX5FA
donateRouter.route('/thankyou')
  .get(function (req, res) {
    console.log('inside thankyou', req)
    var paymentId = req.query.paymentId
    var payerId = { 'payer_id': req.query.PayerID }

    paypal.payment.execute(paymentId, payerId, function (error, payment) {
      if (error) {
        console.error(error)
      } else {
        if (payment.state === 'approved') {
          console.log('approved')
          console.log('payment completed successfully')
          res.redirect('/donate/thankyou')
        } else {
          res.send('payment not successful')
        }
      }
    })
  })

module.exports = donateRouter

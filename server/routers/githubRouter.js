const githubRouter = require('express').Router()
const passport = require('passport')
const Middleware = require('../config')

githubRouter.route('/auth/github')
  .get(passport.authenticate('github', { scope: ['user:email']}), function(req, res) {})

module.exports = githubRouter

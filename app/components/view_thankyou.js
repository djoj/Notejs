import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
// import { fetchUser } from '../actions/action_user'
import { Link } from 'react-router'
import axios from 'axios'


class ViewThankYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      value: '',
      approval_url: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    // alert('Text field value is: ' + this.state.value);
    axios.get('/api/donate/create')
     .then((response) => {
      //  this.state.approval_url = response.data.approval_url
       console.log(response.data.approval_url, 'approval url')
       this.setState({approval_url: response.data.approval_url})
       this.setState({clicked: true})
       console.log(this.state.approval_url)
     })
     .catch((error) => {
       console.log(error);
     });
  }

  render() {
    return (
      <div>
        <h1>Thank you for supporting Notejs</h1>
      </div>
    );
  }
}

export default ViewThankYou

import React,{Component} from 'react';
import {signup} from '../actions/index';

// import validator from 'email-validator';
// import _ from 'lodash';

class Footer extends Component {
  constructor(props) {
      super(props);
      this.state = {leadEmailValue: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className='aae-section__container footer'>
        <div className='signup-form__content'>
          <div className='title'> Sign up for early access! </div>
          <form className='signup-form__form' onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.leadEmailValue}
            onChange={this.handleChange}
            className='email'
            placeholder='username@example.com'/>
          <button type='submit' className='submit-button'> Submit </button>
          </form>
          <div className='notice'> © Tejas Nikumbh 2018. All rights reserved </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({leadEmailValue: event.target.value});
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.leadEmailValue);
    event.preventDefault();
  }
}

export default Footer;

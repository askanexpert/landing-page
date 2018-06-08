import React,{Component} from 'react';

import validator from 'email-validator';
import {signup} from '../actions/index';

import AaeModal from './aae_modal';

class Footer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }



  render() {
    if(this.props.lead.submitted) {
      return(
        <div className='aae-section__container footer'>
          <div className='signup-form__content'>
            <div className='title'> Thanks for submitting your response </div>
            <div className='notice'> © Tejas Nikumbh 2018. All rights reserved </div>
          </div>
        </div>
      );
    }

    return (
      <div className='aae-section__container footer'>
        <div className='signup-form__content'>
        <div className='title'> Sign up for early access! </div>
          <form className='signup-form__form' onSubmit={this.handleSubmit}>
            <input type='text'
              value={this.state.email}
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
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(!validator.validate(this.state.email)) {
      console.log('Invalid email');
      return;
    }

    this.props.signup(this.state.email);
  }
}

export default Footer;

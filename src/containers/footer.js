import React,{Component} from 'react';
import {connect} from 'react-redux';

import {signup} from '../actions/index';

// import validator from 'email-validator';
// import _ from 'lodash';

class Footer extends Component {

  render() {
    return (
      <div className='aae-section__container footer'>
        <div className='signup-form__content'>
          <div className='title'> Sign up for early access! </div>
          <form className='signup-form__form'>
          <input name='email' type='text' className='email' placeholder='username@example.com'/>
          <button type='submit' className='submit-button'> Submit </button>
          </form>
          <div className='notice'> © Tejas Nikumbh 2018. All rights reserved </div>
        </div>
      </div>
    );
  }
}



function mapStateToProps({lead}) {
  return {lead};
}

export default connect(mapStateToProps, {signup})(Footer);

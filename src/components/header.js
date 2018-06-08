import React,{Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className='aae-section__container header'>
        <img id='logo-image' src='../../style/images/logo.png'/>
        <div className='title'> Decentralized real-time chat with experts </div>

        <img id='main-splash' src='../../style/images/main-splash.png'/>
      </div>
    );
  }
}

export default Header;

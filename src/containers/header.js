import React,{Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className='aae-section__container header'>
        <img id='logo-image' src='../../resources/logo.png'/>
      </div>
    );
  }
}

export default Header;

import React,{Component} from 'react';
import {connect} from 'react-redux';

class Section extends Component {
  render() {
    return (
      <div className='aae-section__container'>
        <img id='logo-image' src='../../resources/logo.png'/>
      </div>
    );
  }
}

export default Section;

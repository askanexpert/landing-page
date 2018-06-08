import React,{Component} from 'react';
import {connect} from 'react-redux';

class Section extends Component {
  render() {
    return (
      <div className='aae-section__container'>
        <div className='wrapper'>
          <img className='feature__image' src='../../style/images/mac_mock.png'/>
        </div>
        <div className='wrapper'>
          <div className='feature__action'>Action</div>
          <div className='feature__result'>Result</div>
        </div>
      </div>
    );
  }
}

export default Section;

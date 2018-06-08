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
          <div className='feature__action'>Discover the best experts</div>
          <div className='feature__result'>Choose an area of expertise. Discover numerous experts who are ready to chat and have been rated based on past performance.</div>
        </div>
      </div>
    );
  }
}

export default Section;

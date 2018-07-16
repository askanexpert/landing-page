import React,{Component} from 'react';
import {connect} from 'react-redux';

class Section extends Component {
  render() {
    return (
      <div className={`aae-section__container ${this.props.sectionNum}`}>
        <div className='wrapper'>
          <img className='feature__image' src={`../../style/images/${this.props.image}`}/>
        </div>
        <div className='wrapper'>
          <div className='feature__action'>{this.props.title}</div>
          <div className='feature__result'>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Section;

import React,{Component} from 'react';
import Modal from 'react-awesome-modal';

class AaeModal extends Component {
  render() {
    return(
      <Modal visible={this.props.visible}
      width="300" height="225"
      effect="fadeInUp"
      onClickAway={() => this.props.onClickAwayFunction()}>
        <div className='modal__container'>
          <p className='title'>{this.props.title}</p>
          <p className='content'>{this.props.content}</p>
          <div className='aae-wrapper'>
            <button className='aae-close'
              onClick={() => this.props.onClickAwayFunction()}>
              <span> Close </span>
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AaeModal;

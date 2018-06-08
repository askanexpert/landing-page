import React,{Component} from 'react';
import Modal from 'react-awesome-modal';

class AaeModal extends Component {
  render() {
    return(
      <Modal visible={this.props.visible}
      width="400" height="300"
      effect="fadeInUp"
      onClickAway={() => this.props.onClickAwayFunction()}>
        <div className='modal-container'>
          <p className='modal-title'>{this.props.title}</p>
          <div className='modal-image-container'>
            <img className='modal-image' src={`/style/images/${this.props.image}`}/>
          </div>
          <p className='modal-content'>{this.props.content}</p>
          <div className='modal-button-container'>
            <button className='btn-modal btn-custom-blue'
              onClick={() => this.props.onClickAwayFunction()}>
                Close
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AaeModal;

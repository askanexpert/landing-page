import {connect} from 'react-redux';
import {signup} from '../actions/index';

import Footer from '../components/footer';

function mapStateToProps({lead}) {
  return {lead};
}

export default connect(mapStateToProps, {signup})(Footer);

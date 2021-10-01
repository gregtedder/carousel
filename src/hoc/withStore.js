
import { bindActionCreators } from 'redux'

import { 
  updateAutoScroll,
  updateDelay
} from '../redux/actions/settings_actions';
import { connect } from 'react-redux';

export default function withStore(WrappedComponent) {

  const WithStore = (props) => (
    <WrappedComponent {...props} />
  )

  const mapStateToProps = state => {
    return {
      settings: state.settings
    }
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateAutoScroll,
        updateDelay
      },
      dispatch
    );
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithStore);

}
import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage';
import * as selectors from '../selectors';
import { addMessage } from '../actions';
import { addUserName } from '../actions/user';

const mapStateToProps = state => {
  return {
    isUserRegistered: selectors.isUserRegistered(state)
  }
};

const mapDispatchToProps = dispatch => ({
  addMessage: (message, author) => dispatch(addMessage(message, author)),
  addUserName: name => dispatch(addUserName(name)),
});

export const AddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent);

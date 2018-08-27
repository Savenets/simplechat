import React from 'react';
import PropTypes from 'prop-types';
import { addMessageContent, addMessageContent__input, addMessageContent__button } from './AddMessage.scss';

const AddMessage = ({ addMessage, addUserName, isUserRegistered }) => {
	let messageInput, userNameInput;

	const handleMessageSubmitOnEnterClick = e => {
    if (e.key === 'Enter') {
      handleMessageSubmit();
    }
  };
  const handleMessageSubmit = () => {
    if(messageInput.value === '') return;
    addMessage(messageInput.value, 'Me');
    messageInput.value = '';
  };
  const handleAddUserName = name => {
    if(userNameInput.value === '') {
      alert("Enter your name first!");
      return;
    }
    addUserName(userNameInput.value);
    userNameInput.value = '';
  };

  if (!isUserRegistered) {
    return (
      <div className={addMessageContent}>
        <h4>Please, enter your name to start chat!</h4>
        <input
          className={addMessageContent__input}
          type="text"
          ref={(node) => userNameInput = node}
        />
        <input
          className={addMessageContent__button}
          type="button"
          value="Submit Your Name"
          onClick={handleAddUserName}
        />
      </div>
    );
  }

	return (
		<div className={addMessageContent}>
      <input
        className={addMessageContent__input}
        onKeyPress={handleMessageSubmitOnEnterClick}
        type="text"
        ref={(node) => messageInput = node}
      />
      <input
        className={addMessageContent__button}
        type="button"
        value="Send Message"
        onClick={handleMessageSubmit}
      />
		</div>
	)
};

AddMessage.defaultProps = {
  isUserRegistered: false,
};

AddMessage.PropTypes = {
  addMessage: PropTypes.func.isRequired,
  addUserName: PropTypes.func.isRequired,
  isUserRegistered: PropTypes.bool,
};

export default AddMessage;

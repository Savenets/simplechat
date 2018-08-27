import React from 'react';
import PropTypes from 'prop-types';
import { messageItem, messageItem__author, messageItem__content, messageItem__message } from './Message.scss';

const Message = ({message, author}) => (

  <div className={messageItem}>
    <div className={messageItem__content}>
      <p className={messageItem__author}>{author}</p>
      <p className={messageItem__message}>{message}</p>
    </div>
  </div>);

Message.PropTypes = {
	message: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};

export default Message;

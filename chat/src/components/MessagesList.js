import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { messageList } from './MessageList.scss';

const MessagesList = ({ messages }) => (
  <section className={messageList}>
    <ul>
      {messages.map((message, index) => (
        <Message
          key={index}
          {...message}
        />
      ))}
    </ul>
  </section>
);

MessagesList.PropTypes = {
	messages: PropTypes.arrayOf(
    PropTypes.shape({
			message: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default MessagesList;

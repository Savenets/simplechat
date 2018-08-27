import *  as types from '../constants/ActionTypes'
import { messageReceived, messageHistory } from '../actions'

const setupSocket = dispatch => {
	const socket = new WebSocket('ws://localhost:8989');

	socket.onopen = (e) => {
	  console.log('on open handler');
	};

	socket.onmessage = (event) => {
		const data = JSON.parse(event.data);
		switch (data.type) {
			case types.ADD_MESSAGE:
				dispatch(messageReceived(data.message, data.author));
				break;
      case types.MESSAGE_HISTORY:
        dispatch(messageHistory(data.previousMessages));
        break;
			default:
				break
		}
	};
	return socket
};

export default setupSocket

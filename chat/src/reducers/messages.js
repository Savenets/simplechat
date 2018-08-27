import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {
	switch (action.type) {
		case types.ADD_MESSAGE:
		case types.MESSAGE_RECEIVED: {
      return [ ...state,
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ]
    }
    case types.MESSAGE_HISTORY: {
      return [...state, ...action.previousMessages];
    }
		default:
			return state
	}
};

export default messages;

import * as types from '../constants/ActionTypes';

const initialState = {
  userName: '',
  isUserRegistered: false
};

const user = (state = initialState, action) => {
	switch (action.type) {
    case types.ADD_USER_NAME:
			return {...state, userName: action.name, isUserRegistered: true};
		default:
			return state
	}
};

export default user

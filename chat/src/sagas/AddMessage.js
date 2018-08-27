import { takeEvery, select } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import * as selectors from '../selectors';
import setupSocket from '../sockets';
import store from '../store';

const socket = setupSocket(store.dispatch);

function* handleSendMessage(action) {
  action.author = yield select(selectors.getUserName);
  socket.send(JSON.stringify(action));
}

export default function* handleNewMessage() {
	yield takeEvery(types.ADD_MESSAGE, handleSendMessage )
};

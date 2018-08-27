import { spawn, all } from 'redux-saga/effects';
import handleNewMessage from './AddMessage';

export default function* root() {
  yield all([
    spawn(handleNewMessage),
  ]);
}

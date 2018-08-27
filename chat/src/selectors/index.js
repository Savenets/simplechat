import { createSelector } from 'reselect';
import get from 'lodash/get';

const userSelector = state => state.user;

export const getUserName = createSelector(userSelector, userName => get(userName, 'userName'));
export const isUserRegistered = createSelector(userSelector, isUserRegistered => get(isUserRegistered, 'isUserRegistered', false));


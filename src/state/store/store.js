import { createStore, applyMiddleware } from 'redux';
import UsersReducer from './../reducers/UsersReducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(UsersReducer, applyMiddleware(thunk, logger));

export default store;
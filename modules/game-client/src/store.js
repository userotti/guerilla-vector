import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import reducer from "./reducers";

let socket = io('http://localhost:5001');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const logger = createLogger({
    //empty options
});

const middleware = applyMiddleware(socketIoMiddleware, promise(), thunk, logger);
let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__){
     store = createStore(reducer, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));
} else {
     store = createStore(reducer, middleware);
}

export default store

import { combineReducers } from 'redux';
import socketState from './socketState/index.js'

//Add the the other reducer strutures
export default combineReducers({
    socketState,
})

import { combineReducers } from 'redux';
import socketReducer from './socket'
import userReducer from './user'
import scenesReducer from './scenes'
import sessionReducer from './session'



//Add the the other reducer strutures
export default combineReducers({
    sessionState: sessionReducer,
    userState: userReducer,
    socketState: socketReducer,
    scenesState: scenesReducer,


})

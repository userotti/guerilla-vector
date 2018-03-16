import { combineReducers } from 'redux';
import welcomeSceneReducer from './welcomeSceneReducer'

//Add the the other reducer strutures
export default combineReducers({
    welcomeSceneState: welcomeSceneReducer,
})

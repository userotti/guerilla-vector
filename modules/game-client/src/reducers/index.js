import { combineReducers } from 'redux';

// import differntReducer from "./differntReducer"

var rootReducer = function(state={
        name: "lets goooo"
    }, action) {

        switch (action.type) {
            case "DO_SOMETHING":{
                return {
                    ...state
                    }
            }

        }

        return state

}

//Add the the other reducer strutures 
export default combineReducers({
    rootReducer,
})

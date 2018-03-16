var welcomeSceneReducer = function(state={
    userNameErrorMessage: null
}, action) {

    switch(action.type){


        case 'SET_USER_NAME_ERROR_MESSAGE':
        console.log("action.payload", action.userNameErrorMessage)
        return {
            ...state,
            userNameErrorMessage: action.userNameErrorMessage
        }
        default:
        return state;
    }

}

//Add the the other reducer strutures
export default welcomeSceneReducer

export function doSomething(payload) {
    return {
        type: 'DO_SOMETHING',
        payload: payload
    }
}

export function setUserName(payload) {
    return {
        type: 'SET_USER_NAME',
        userName: payload
    }
}


export function setUserNameErrorMessage(payload) {
    return {
        type: 'SET_USER_NAME_ERROR_MESSAGE',
        userNameErrorMessage: payload
    }
}

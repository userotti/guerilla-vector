var socketState = function(state={}, action) {

        switch(action.type){
          case 'message':
            return Object.assign({}, {message:action.data});
          default:
            return state;
        }

}

//Add the the other reducer strutures
export default socketState

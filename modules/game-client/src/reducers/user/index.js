const INITIAL_STATE = {
  users: {},
};

const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USERS_SET' : {
      return applySetUsers(state, action);
    }
    default : return state;
  }
}

export default userReducer;

var initialState = null


//
// var userReducer = function(state=initialState, action) {
//
//     switch(action.type){
//         case 'SET_USER_NAME':
//         return {
//             ...state,
//             userName: action.userName
//         }
//         case 'SET_USER_SCORE':
//         return {
//             ...state,
//             userScore: action.userScore
//         }
//         default:
//         return state;
//     }
//
// }
//
// //Add the the other reducer strutures
// export default userReducer

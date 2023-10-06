import { USER_LOGIN, USER_LOGOUT, USER_PROFIL } from "../actions/user.action";
const initialState = {
  userData: {},
};

export default function userReducer(state = initialState, action) {
  //SWITCH
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userData: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
      };
    case USER_PROFIL:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}

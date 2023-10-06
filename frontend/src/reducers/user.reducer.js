import { USER_LOGIN, USER_LOGOUT } from "../actions/user.action";
const initialState = {};

export default function userReducer(state = initialState, action) {
  //SWITCH
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}

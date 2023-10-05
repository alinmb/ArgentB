import { USER_LOGIN } from "../actions/user.action";
const initialState = {};

export default function userReducer(state = initialState, action) {
  //SWITCH
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

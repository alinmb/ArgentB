import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_PROFIL,
  EDIT_PROFIL,
  SET_TOKEN,
  REMOVE_TOKEN,
} from "../actions/user.action";
const initialState = {
  userData: {},
  token: null,
};

export default function userReducer(state = initialState, action) {
  //SWITCH
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
      };
    case USER_LOGOUT:
      return {
        ...state,
      };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case REMOVE_TOKEN:
      return { ...state, token: null };
    case USER_PROFIL:
      return {
        ...state,
        userData: action.payload,
      };
    case EDIT_PROFIL:
      return {
        ...state,
        userData: { ...state.userData, userName: action.payload },
      };
    default:
      return state;
  }
}

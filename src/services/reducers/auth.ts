import { TUser } from "../../utils/types";
import { TAuthActions } from "../actions/auth-actions";
import {
  CLEAR_PASSWORD_RESET,
  LOGIN_USER,
  LOGOUT_USER,
  PASSWORD_RESET_PENDING,
  REGISTER_USER,
  SET_USER,
  UPDATE_USER,
} from "../constants";

type TAuthState = {
  user: TUser | null;
  isAuthorized: boolean;
  isPasswordResetPending: boolean;
};

export const initialState: TAuthState = {
  user: null,
  isAuthorized: false,
  isPasswordResetPending: false,
};

export const authReducer = (state = initialState, action: TAuthActions) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.user,
        isAuthorized: true,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.user,
        isAuthorized: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthorized: false,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
        isAuthorized: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.user,
        isAuthorized: true,
      };
    case PASSWORD_RESET_PENDING:
      return {
        ...state,
        isPasswordResetPending: true,
      };
    case CLEAR_PASSWORD_RESET:
      return {
        ...state,
        isPasswordResetPending: false,
      };
    default:
      return state;
  }
};

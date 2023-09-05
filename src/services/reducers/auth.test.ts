import { TUser } from "../../utils/types";
import { TAuthActions } from "../actions/auth-actions";
import {
  CLEAR_PASSWORD_RESET,
  LOGIN_USER,
  LOGOUT_USER,
  PASSWORD_RESET_PENDING,
  REGISTER_USER,
} from "../constants";
import { authReducer, initialState } from "./auth";

const user: TUser = {
  name: "some name",
  email: "some@email.com",
};

const userAuthorizedState = {
  user: user,
  isAuthorized: true,
  isPasswordResetPending: false,
};

describe("Auth reducer", () => {
  it("should return initial state", () => {
    expect(authReducer(undefined, {} as TAuthActions)).toEqual(initialState);
  });

  it("should login user", () => {
    expect(authReducer(undefined, { type: LOGIN_USER, user: user })).toEqual(
      userAuthorizedState
    );
  });

  it("should register user", () => {
    expect(authReducer(undefined, { type: REGISTER_USER, user: user })).toEqual(
      userAuthorizedState
    );
  });

  it("should logout user", () => {
    expect(authReducer(userAuthorizedState, { type: LOGOUT_USER })).toEqual(
      initialState
    );
  });

  it("should set password reset flag", () => {
    expect(authReducer(undefined, { type: PASSWORD_RESET_PENDING })).toEqual({
      ...initialState,
      isPasswordResetPending: true,
    });
  });

  it("should clear password reset flag", () => {
    expect(
      authReducer(
        {
          ...initialState,
          isPasswordResetPending: true,
        },
        { type: CLEAR_PASSWORD_RESET }
      )
    ).toEqual(initialState);
  });
});

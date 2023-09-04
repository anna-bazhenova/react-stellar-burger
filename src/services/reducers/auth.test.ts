import { TUser } from "../../utils/types";
import { TAuthActions } from "../actions/auth-actions";
import {
  CLEAR_PASSWORD_RESET,
  LOGIN_USER,
  LOGOUT_USER,
  PASSWORD_RESET_PENDING,
  REGISTER_USER,
} from "../constants";
import { authReducer } from "./auth";

const user: TUser = {
  name: "some name",
  email: "some@email.com",
};

describe("Auth reducer", () => {
  it("should return initial state", () => {
    expect(authReducer(undefined, {} as TAuthActions)).toEqual({
      user: null,
      isAuthorized: false,
      isPasswordResetPending: false,
    });
  });

  it("should login user", () => {
    expect(authReducer(undefined, { type: LOGIN_USER, user: user })).toEqual({
      user: user,
      isAuthorized: true,
      isPasswordResetPending: false,
    });
  });

  it("should register user", () => {
    expect(authReducer(undefined, { type: REGISTER_USER, user: user })).toEqual(
      {
        user: user,
        isAuthorized: true,
        isPasswordResetPending: false,
      }
    );
  });

  it("should logout user", () => {
    expect(
      authReducer(
        {
          user: user,
          isAuthorized: true,
          isPasswordResetPending: false,
        },
        { type: LOGOUT_USER }
      )
    ).toEqual({
      user: null,
      isAuthorized: false,
      isPasswordResetPending: false,
    });
  });

  it("should set password reset flag", () => {
    expect(authReducer(undefined, { type: PASSWORD_RESET_PENDING })).toEqual({
      user: null,
      isAuthorized: false,
      isPasswordResetPending: true,
    });
  });

  it("should clear password reset flag", () => {
    expect(
      authReducer(
        {
          user: user,
          isAuthorized: false,
          isPasswordResetPending: true,
        },
        { type: CLEAR_PASSWORD_RESET }
      )
    ).toEqual({
      user: user,
      isAuthorized: false,
      isPasswordResetPending: false,
    });
  });
});

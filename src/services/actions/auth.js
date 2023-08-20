import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER,
  PASSWORD_RESET_PENDING,
  CLEAR_PASSWORD_RESET,
  SET_USER,
} from "../constants";
import { request, requestWithTokenRefresh } from "../../utils/request";

export const login = (user) => {
  return (dispatch) => {
    request("auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        dispatch({
          type: LOGIN_USER,
          user: response.user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const register = (user) => {
  return (dispatch) => {
    request("auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
      }),
    })
      .then((response) => {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        dispatch({
          type: REGISTER_USER,
          user: response.user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    request("auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then((response) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch({
          type: LOGOUT_USER,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const requestPasswordReset = (email) => {
  return async (dispatch) => {
    await request("password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => {
        dispatch({
          type: PASSWORD_RESET_PENDING,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const resetPassword = (password, token) => {
  return async (dispatch) => {
    await request("password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then((response) => {
        dispatch({
          type: CLEAR_PASSWORD_RESET,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUser = () => {
  return async (dispatch) => {
    await requestWithTokenRefresh("auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        dispatch({
          type: SET_USER,
          user: response.user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    requestWithTokenRefresh("auth/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => {
        dispatch({
          type: UPDATE_USER,
          user: response.user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

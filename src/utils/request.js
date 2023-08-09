const basePath = "https://norma.nomoreparties.space/api";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const request = (path, options) => {
  return fetch(`${basePath}/${path}`, options).then(handleResponse);
};

const requestWithTokenRefresh = (path, options) => {
  try {
    return request(path, options);
  } catch (err) {
    if (err.message === "jwt expired") {
      const tokenRefreshResponse = refreshToken();
      if (!tokenRefreshResponse.success) {
        return Promise.reject(tokenRefreshResponse);
      }
      localStorage.setItem("accessToken", tokenRefreshResponse.accessToken);
      localStorage.setItem("refreshToken", tokenRefreshResponse.refreshToken);
      options.headers.authorization = tokenRefreshResponse.accessToken;
      return request(path, options);
    } else {
      return Promise.reject(err);
    }
  }
};

const refreshToken = () => {
  return request("api/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
};

export { request, requestWithTokenRefresh };

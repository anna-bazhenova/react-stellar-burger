const basePath = "https://norma.nomoreparties.space/api";

const handleResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
};

const checkSuccess = (res: any) => {
  if (res.success) {
    return res;
  }
  return Promise.reject(res);
};

const request = (path: string, options: RequestInit = {}) => {
  return fetch(`${basePath}/${path}`, options)
    .then(handleResponse)
    .then(checkSuccess);
};

const requestWithTokenRefresh = (path: string, options: RequestInit = {}) => {
  return request(path, options).catch((err) => {
    if (err.message === "jwt expired") {
      return refreshToken().then((tokenResponse) => {
        localStorage.setItem("accessToken", tokenResponse.accessToken);
        localStorage.setItem("refreshToken", tokenResponse.refreshToken);
        
        const headers = new Headers(options.headers);
        headers.set("Authorization", tokenResponse.accessToken);
        options.headers = headers;
      
        return request(path, options);
      });
    } else {
      return Promise.reject(err);
    }
  });
};

type TTokenRefreshResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

const refreshToken = (): Promise<TTokenRefreshResponse> => {
  return request("auth/token", {
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

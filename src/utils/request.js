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

export default request;

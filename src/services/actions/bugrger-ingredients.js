import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants";

export const getIngredients = () => {
  return (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });

    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({ type: GET_INGREDIENTS_ERROR });
          return Promise.reject(`Ошибка ${res.status}`);
        }
      })
      .then((json) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: json.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_INGREDIENTS_ERROR });
      });
  };
};

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUSSESS,
  PLACE_ORDER_ERROR,
  CLEAR_BURGER_INGREDIENTS,
} from "../constants";

import request from "../../utils/request";

export const getIngredients = () => {
  return (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });

    request("ingredients")
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

export const placeOrder = (ingredientIds) => {
  return (dispatch) => {
    dispatch({ type: PLACE_ORDER_REQUEST });

    request("orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientIds,
      }),
    })
      .then((json) => {
        dispatch({
          type: PLACE_ORDER_SUSSESS,
          orderId: json.order.number,
        });
        dispatch({
          type: CLEAR_BURGER_INGREDIENTS,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: PLACE_ORDER_ERROR });
      });
  };
};

import { request } from "../../utils/request";
import {
  CLEAR_ORDER_ID,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUSSESS,
  PLACE_ORDER_ERROR,
  CLEAR_BURGER_INGREDIENTS,
} from "../constants";
import { AppDispatch } from "../store";

export interface IPlaceOrderRequestAction {
  type: typeof PLACE_ORDER_REQUEST;
}

export interface IPlaceOrderSuccessAction {
  type: typeof PLACE_ORDER_SUSSESS;
  orderId: number;
}

export interface IPlaceOrderErrorAction {
  type: typeof PLACE_ORDER_ERROR;
}

export interface IClearOrderIdAction {
  type: typeof CLEAR_ORDER_ID;
}

export type TOrderActions =
  | IPlaceOrderRequestAction
  | IPlaceOrderSuccessAction
  | IPlaceOrderErrorAction
  | IClearOrderIdAction;

export const placeOrder = (ingredientIds: string[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: PLACE_ORDER_REQUEST });

    await request("orders", {
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

export const clearOrderId = () => ({
  type: CLEAR_ORDER_ID,
});

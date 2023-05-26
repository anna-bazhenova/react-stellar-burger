import { SET_ORDER_ID, CLEAR_ORDER_ID } from "../constants";

export const setOrderId = (orderId) => {
  return {
    type: SET_ORDER_ID,
    orderId: orderId,
  };
}

export const clearOrderId = () => {
  return {
    type: CLEAR_ORDER_ID,
  };
}

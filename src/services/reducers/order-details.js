import { CLEAR_ORDER_ID, SET_ORDER_ID } from "../constants";

const initialState = {
    orderId: null 
};

export const orderDetails = (state = initialState, action) => {
    switch (action.type) {
      case SET_ORDER_ID: {
        return { ...state, orderId: action.orderId };
      }
      case CLEAR_ORDER_ID: {
        return { ...state, orderId: null };
      }
      default:
        return state;
    }
}
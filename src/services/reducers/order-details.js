import {
  CLEAR_ORDER_ID,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUSSESS,
} from "../constants";

const initialState = {
  orderId: null,
};

export const orderDetails = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST: {
      return state;
    }
    case PLACE_ORDER_SUSSESS: {
      return { ...state, orderId: action.orderId };
    }
    case PLACE_ORDER_ERROR: {
      return { ...state, orderId: null };
    }
    case CLEAR_ORDER_ID: {
      return { ...state, orderId: null };
    }
    default:
      return state;
  }
};

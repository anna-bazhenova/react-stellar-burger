import { TOrderActions } from "../actions/order-actions";
import {
  CLEAR_ORDER_ID,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUSSESS,
} from "../constants";

type TOrderState = {
  orderId: number | null;
};

const initialState: TOrderState = {
  orderId: null,
};

export const orderDetailsReducer = (
  state = initialState,
  action: TOrderActions
) => {
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

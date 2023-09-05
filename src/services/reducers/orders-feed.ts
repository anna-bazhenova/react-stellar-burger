import { TOrderFeed } from "../../utils/types";
import { TWSActions } from "../actions/ws-actions";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../constants";

type TState = {
  wsConnected: boolean;
  orderFeed: TOrderFeed;
};

export const initialState: TState = {
  wsConnected: false,
  orderFeed: {
    success: false,
    orders: [],
    total: 0,
    totalToday: 0,
  },
};

export const orderFeedReducer = (
  state = initialState,
  action: TWSActions
): TState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        orderFeed: action.payload,
      };
    default:
      return state;
  }
};

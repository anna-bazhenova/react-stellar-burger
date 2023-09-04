import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../constants";
import type { TOrderFeed } from "../../utils/types";

export interface IConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}
export interface IConnectionCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSE;
}
export interface IConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
}
export interface IConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: TOrderFeed;
}

export type TWSActions =
  | IConnectionStartAction
  | IConnectionCloseAction
  | IConnectionSuccessAction
  | IConnectionErrorAction
  | IConnectionClosedAction
  | IGetMessageAction;

export const wsConnectionStart = (wsUrl: string): IConnectionStartAction => {
  return {
    type: WS_CONNECTION_START,
    payload: wsUrl,
  };
};
export const wsConnectionClose = (): IConnectionCloseAction => {
  return {
    type: WS_CONNECTION_CLOSE,
  };
};
export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsGetMessage = (message: TOrderFeed) => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};

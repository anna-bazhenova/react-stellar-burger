import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../constants";

export type TWS = {
  wsStart: typeof WS_CONNECTION_START;
  wsClose: typeof WS_CONNECTION_CLOSE;
  onOpen: typeof WS_CONNECTION_SUCCESS;
  onClose: typeof WS_CONNECTION_CLOSED;
  onError: typeof WS_CONNECTION_ERROR;
  onMessageReceived: typeof WS_GET_MESSAGE;
};

export const wsActions: TWS = {
  wsStart: "WS_CONNECTION_START",
  wsClose: "WS_CONNECTION_CLOSE",
  onOpen: "WS_CONNECTION_SUCCESS",
  onClose: "WS_CONNECTION_CLOSED",
  onError: "WS_CONNECTION_ERROR",
  onMessageReceived: "WS_GET_MESSAGE"
}
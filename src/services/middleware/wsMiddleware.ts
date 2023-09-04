import type { Middleware, MiddlewareAPI } from "redux";
import { TWSActions } from "../actions/ws-actions";
import { AppDispatch, RootState } from "../../utils/types";
import { TWS } from "./wsActions";


export const socketMiddleware = (wsActions: TWS): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsStart, wsClose, onOpen, onError, onClose, onMessageReceived } = wsActions

      if (type === wsStart) {
        socket = new WebSocket(action.payload);
      }

      if (type === wsClose) {
        socket?.close();
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: onMessageReceived, payload: JSON.parse(data) });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose });
        };
      }

      next(action);
    };
  }) as Middleware;
};

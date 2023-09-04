import { TOrderFeed } from "../../utils/types";
import { TWSActions } from "../actions/ws-actions";
import { WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../constants";
import { orderFeedReducer } from "./orders-feed";

const wsMessage: TOrderFeed = {
  success: true,
  orders: [
    {
      _id: "some order id",
      status: "done",
      number: 1,
      createdAt: "2023-09-31T21:00:00",
      updatedAt: "2023-09-31T21:01:00",
      name: "some order name",
      ingredients: ["60666c42cc7b410027a1a9b6"],
    },
  ],
  total: 1,
  totalToday: 2,
};

describe("Order Feed Reducer", () => {
  it("should return initial state", () => {
    expect(orderFeedReducer(undefined, {} as TWSActions)).toEqual({
      wsConnected: false,
      orderFeed: {
        success: false,
        orders: [],
        total: 0,
        totalToday: 0,
      },
    });
  });

  it("should set connected flag", () => {
    expect(
      orderFeedReducer(undefined, { type: WS_CONNECTION_SUCCESS })
    ).toEqual({
      wsConnected: true,
      orderFeed: {
        success: false,
        orders: [],
        total: 0,
        totalToday: 0,
      },
    });
  });

  it("should set order feed", () => {
    expect(
      orderFeedReducer(undefined, { type: WS_GET_MESSAGE, payload: wsMessage })
    ).toEqual({
      wsConnected: false,
      orderFeed: wsMessage,
    });
  });
});

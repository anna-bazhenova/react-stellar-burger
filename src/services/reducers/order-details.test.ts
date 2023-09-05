import { TOrderActions, clearOrderId } from "../actions/order-actions";
import { PLACE_ORDER_SUSSESS } from "../constants";
import { initialState, orderDetailsReducer } from "./order-details";

describe("Order Details reducer", () => {
  it("should return initial state", () => {
    expect(orderDetailsReducer(undefined, {} as TOrderActions)).toEqual(
      initialState
    );
  });

  it("should place order", () => {
    const createdOrderId = 1234;
    expect(
      orderDetailsReducer(undefined, {
        type: PLACE_ORDER_SUSSESS,
        orderId: createdOrderId,
      })
    ).toEqual({
      orderId: createdOrderId,
    });
  });

  it("should clear order id", () => {
    const orderId = 1234;
    expect(orderDetailsReducer({ orderId: orderId }, clearOrderId())).toEqual(
      initialState
    );
  });
});

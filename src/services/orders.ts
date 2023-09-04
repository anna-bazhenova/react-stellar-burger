import { request } from "../utils/request";
import { TOrderFeedItem } from "../utils/types";

export const getOrder = (orderNumber: number): Promise<TOrderFeedItem> => {
  return request(`orders/${orderNumber}`).then((json) => {
    if (json.success) {
      return json.orders[0];
    }
  });
};

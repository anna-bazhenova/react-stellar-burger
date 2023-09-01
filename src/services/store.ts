import { burgerIngredientsReducer } from "./reducers/burger-ingredients";
import { burgerConstrustorReducer } from "./reducers/burger-constructor";
import { orderDetailsReducer } from "./reducers/order-details";
import { authReducer } from "./reducers/auth";
import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "./middleware/wsMiddleware";
import { orderFeedReducer } from "./reducers/orders-feed";

export const store = configureStore({
  reducer: {
    availableIngredients: burgerIngredientsReducer,
    burgerIngredients: burgerConstrustorReducer,
    orderDetails: orderDetailsReducer,
    auth: authReducer,
    feed: orderFeedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware()),
});

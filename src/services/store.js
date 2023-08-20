import { burgerIngredientsReducer } from "./reducers/burger-ingredients";
import { burgerConstrustorReducer } from "./reducers/burger-constructor";
import { orderDetailsReducer } from "./reducers/order-details";
import { authReducer } from "./reducers/auth";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    availableIngredients: burgerIngredientsReducer,
    burgerIngredients: burgerConstrustorReducer,
    orderDetails: orderDetailsReducer,
    auth: authReducer,
  },
});
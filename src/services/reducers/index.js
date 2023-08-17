import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstrustorReducer } from "./burger-constructor";
import { orderDetails } from "./order-details";
import { authReducer } from "./auth";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  availableIngredients: burgerIngredientsReducer,
  burgerIngredients: burgerConstrustorReducer,
  orderDetails,
  authReducer
});

import { burgerIngredientsReducer } from "./burger-ingredients"
import { burgerConstrustorReducer } from "./burger-constructor";
import { ingredientDetails as ingredientDetailsReducer } from "./ingredient-details";
import { orderDetails } from "./order-details";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  availableIngredients: burgerIngredientsReducer,
  burgerIngredients: burgerConstrustorReducer,
  selectedIngredient: ingredientDetailsReducer,
  orderDetails,
});
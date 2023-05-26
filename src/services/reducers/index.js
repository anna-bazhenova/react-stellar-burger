import { burgerIngredients } from "./burger-ingredients"
import { burgerConstrustor } from "./burger-constructor";
import { ingredientDetails } from "./ingredient-details";
import { orderDetails } from "./order-details";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ burgerIngredients, burgerConstrustor, ingredientDetails, orderDetails })
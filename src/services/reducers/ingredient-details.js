import { SHOW_INGREDIENT_DETAILS, HIDE_INGREDIENT_DETAILS } from "../constants";

const initialState = {};

export const ingredientDetails = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_INGREDIENT_DETAILS: {
        return action.ingredient;
      }
      case HIDE_INGREDIENT_DETAILS: {
        return {};
      }
      default:
        return state;
    }
}
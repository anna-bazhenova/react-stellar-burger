import { SHOW_INGREDIENT_DETAILS, HIDE_INGREDIENT_DETAILS } from "../constants";

export const showIngredientDetails = (ingredient) => {
  return {
    type: SHOW_INGREDIENT_DETAILS,
    ingredient: ingredient,
  };
}

export const hideIngredientDetails = () => {
  return {
    type: HIDE_INGREDIENT_DETAILS,
  };
}
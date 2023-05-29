import { SHOW_INGREDIENT_DETAILS, HIDE_INGREDIENT_DETAILS } from "../constants";

export const showIngredientDetails = (ingredient) => ({
  type: SHOW_INGREDIENT_DETAILS,
  ingredient: ingredient,
});

export const hideIngredientDetails = () => ({
  type: HIDE_INGREDIENT_DETAILS,
});

import { ADD_BURGER_INGREDIENT, REMOVE_BURGER_INGREDIENT } from "../constants";


export const addBurgerIngredient = (ingredientId) => {
  return {
    type: ADD_BURGER_INGREDIENT,
    ingredientId: ingredientId
  }
}

export const removeBurgedIngredient = (ingredientId) => {
  return {
    type: REMOVE_BURGER_INGREDIENT,
    ingredientId: ingredientId
  }
}
import { ADD_BURGER_INGREDIENT, REMOVE_BURGER_INGREDIENT } from "../constants";


export const addBurgerIngredient = (ingredient) => {
  return {
    type: ADD_BURGER_INGREDIENT,
    ingredient: ingredient
  }
}

export const removeBurgedIngredient = (atIndex) => {
  return {
    type: REMOVE_BURGER_INGREDIENT,
    atIndex: atIndex
  }
}
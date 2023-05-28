import {
  ADD_BURGER_INGREDIENT,
  REMOVE_BURGER_INGREDIENT,
  MOVE_BURGER_INGREDIENTS,
} from "../constants";

export const addBurgerIngredient = (ingredient) => {
  return {
    type: ADD_BURGER_INGREDIENT,
    ingredient: ingredient,
  };
};

export const removeBurgedIngredient = (atIndex) => {
  return {
    type: REMOVE_BURGER_INGREDIENT,
    atIndex: atIndex,
  };
};

export const moveBurgerIngredient = (sourceIdx, targetIdx) => ({
  type: MOVE_BURGER_INGREDIENTS,
  sourceIdx: sourceIdx,
  targetIdx: targetIdx,
});

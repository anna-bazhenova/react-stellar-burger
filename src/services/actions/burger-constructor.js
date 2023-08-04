import {
  ADD_BURGER_INGREDIENT,
  REMOVE_BURGER_INGREDIENT,
  MOVE_BURGER_INGREDIENTS,
} from "../constants";
import { nanoid } from "nanoid";

export const addBurgerIngredient = (ingredient) => ({
  type: ADD_BURGER_INGREDIENT,
  ingredient: {
    ...ingredient,
    uniqueId: nanoid(),
  },
});

export const removeBurgedIngredient = (atIndex) => ({
  type: REMOVE_BURGER_INGREDIENT,
  atIndex: atIndex,
});

export const moveBurgerIngredient = (sourceIdx, targetIdx) => ({
  type: MOVE_BURGER_INGREDIENTS,
  sourceIdx: sourceIdx,
  targetIdx: targetIdx,
});

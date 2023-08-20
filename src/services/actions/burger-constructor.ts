import { TIngredient } from "../../utils/types";
import {
  ADD_BURGER_INGREDIENT,
  REMOVE_BURGER_INGREDIENT,
  MOVE_BURGER_INGREDIENTS,
} from "../constants";
import { nanoid } from "nanoid";

export const addBurgerIngredient = (ingredient: TIngredient) => ({
  type: ADD_BURGER_INGREDIENT,
  ingredient: {
    ...ingredient,
    uniqueId: nanoid(),
  },
});

export const removeBurgedIngredient = (atIndex: number) => ({
  type: REMOVE_BURGER_INGREDIENT,
  atIndex: atIndex,
});

export const moveBurgerIngredient = (sourceIdx: number, targetIdx: number) => ({
  type: MOVE_BURGER_INGREDIENTS,
  sourceIdx: sourceIdx,
  targetIdx: targetIdx,
});

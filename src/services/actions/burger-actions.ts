import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  ADD_BURGER_INGREDIENT,
  REMOVE_BURGER_INGREDIENT,
  MOVE_BURGER_INGREDIENTS,
  CLEAR_BURGER_INGREDIENTS,
} from "../constants";

import { AppDispatch, TBurgerIngredient, TIngredient } from "../../utils/types";

import { request } from "../../utils/request";

import { nanoid } from "nanoid";


export interface IGetIngredientsRequestAction {
  type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: TIngredient[];
}

export interface IGetIngredientsErrorAction {
  type: typeof GET_INGREDIENTS_ERROR;
}

export interface IAddBurgerIngredientAtion {
  readonly type: typeof ADD_BURGER_INGREDIENT;
  readonly ingredient: TBurgerIngredient;
}

export interface IRemoveBurgerIngredientAtion {
  readonly type: typeof REMOVE_BURGER_INGREDIENT;
  readonly atIndex: number;
}

export interface IMoveBurgerIngredientAtion {
  readonly type: typeof MOVE_BURGER_INGREDIENTS;
  readonly sourceIdx: number;
  readonly targetIdx: number;
}

export interface IClearBurgerIngredientsAction {
  type: typeof CLEAR_BURGER_INGREDIENTS;
}

export type TBurgerActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsErrorAction
  | IAddBurgerIngredientAtion
  | IRemoveBurgerIngredientAtion
  | IMoveBurgerIngredientAtion
  | IClearBurgerIngredientsAction;

export const getIngredients = () => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    request("ingredients")
      .then((json) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: json.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_INGREDIENTS_ERROR });
      });
  };
};

export const addBurgerIngredient = (
  ingredient: TIngredient
): IAddBurgerIngredientAtion => ({
  type: ADD_BURGER_INGREDIENT,
  ingredient: {
    ...ingredient,
    uniqueId: nanoid(),
  },
});

export const removeBurgedIngredient = (
  atIndex: number
): IRemoveBurgerIngredientAtion => ({
  type: REMOVE_BURGER_INGREDIENT,
  atIndex: atIndex,
});

export const moveBurgerIngredient = (
  sourceIdx: number,
  targetIdx: number
): IMoveBurgerIngredientAtion => ({
  type: MOVE_BURGER_INGREDIENTS,
  sourceIdx: sourceIdx,
  targetIdx: targetIdx,
});

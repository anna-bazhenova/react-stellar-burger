import { TBurgerIngredient } from "../../utils/types";
import { TBurgerActions } from "../actions/burger-actions";
import {
  ADD_BURGER_INGREDIENT,
  CLEAR_BURGER_INGREDIENTS,
  REMOVE_BURGER_INGREDIENT,
  MOVE_BURGER_INGREDIENTS,
} from "../constants";

type TBurgerConstructorState = {
  bun: TBurgerIngredient | null;
  ingredients: TBurgerIngredient[];
};

export const initialState: TBurgerConstructorState = {
  bun: null,
  ingredients: [],
};

export const burgerConstrustorReducer = (
  state = initialState,
  action: TBurgerActions
) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      if (action.ingredient.type === "bun") {
        return { ...state, bun: action.ingredient };
      }
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      };
    }
    case REMOVE_BURGER_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (_, idx) => idx !== action.atIndex
        ),
      };
    }
    case MOVE_BURGER_INGREDIENTS: {
      const arrayMove = (
        arr: TBurgerIngredient[],
        sourceIdx: number,
        targetIdx: number
      ): TBurgerIngredient[] => {
        let res = [...arr];
        res.splice(targetIdx, 0, res.splice(sourceIdx, 1)[0]);
        return res;
      };
      return {
        ...state,
        ingredients: arrayMove(
          state.ingredients,
          action.sourceIdx,
          action.targetIdx
        ),
      };
    }
    case CLEAR_BURGER_INGREDIENTS: {
      return initialState;
    }
    default:
      return state;
  }
};

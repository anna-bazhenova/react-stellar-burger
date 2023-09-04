import { TIngredient } from "../../utils/types";
import { TBurgerActions } from "../actions/burger-actions";
import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../constants";

type TBurgerIngredientsState = {
  items: TIngredient[];
  itemsRequesting: boolean;
  itemsRequestFailed: boolean;
};

const initialState: TBurgerIngredientsState = {
  items: [],
  itemsRequesting: false,
  itemsRequestFailed: false,
};

export const burgerIngredientsReducer = (
  state = initialState,
  action: TBurgerActions
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        itemsRequesting: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        items: action.ingredients,
        itemsRequesting: false,
      };
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        itemsRequesting: false,
        itemsRequestFailed: true,
      };
    }
    default:
      return state;
  }
};

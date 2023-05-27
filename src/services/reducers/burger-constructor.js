import {
  ADD_BURGER_INGREDIENT,
  CLEAR_BURGER_INGREDIENTS,
  REMOVE_BURGER_INGREDIENT,
} from "../constants";

const initialState = {
  bun: {},
  ingredients: [],
};

export const burgerConstrustorReducer = (state = initialState, action) => {
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
    case CLEAR_BURGER_INGREDIENTS: {
      return initialState;
    }
    default:
      return state;
  }
};

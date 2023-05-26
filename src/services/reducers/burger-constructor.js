import { ADD_BURGER_INGREDIENT, REMOVE_BURGER_INGREDIENT } from "../constants";

const initialState = [];

export const burgerConstrustorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      return [...state, action.ingredientId];
    }
    case REMOVE_BURGER_INGREDIENT: {
      return [...state].filter(
        (ingredientId) => ingredientId != action.ingredientId
      );
    }
    default:
      return state;
  }
};

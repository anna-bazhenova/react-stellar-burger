import { ADD_BURGER_INGREDIENT, REMOVE_BURGER_INGREDIENT } from "../constants";

const initialState = [

];

export const burgerConstrustorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      return [...state, action.ingredient];
    }
    case REMOVE_BURGER_INGREDIENT: {
      return [...state].filter(
        (ingredient) => ingredient._id !== action.ingredient._id
      );
    }
    default:
      return state;
  }
};

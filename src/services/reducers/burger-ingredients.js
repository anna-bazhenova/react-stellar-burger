import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../constants";

const initialState = {
  items: [],
  itemsRequesting: false,
  itemsRequestFailed: false,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
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

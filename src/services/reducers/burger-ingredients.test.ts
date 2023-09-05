import { TBurgerActions } from "../actions/burger-actions";
import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../constants";
import { burgerIngredientsReducer, initialState } from "./burger-ingredients";
import { bun, mainIngredient, souceIngredient } from "./test-fixtures";

const ingredients = [bun, mainIngredient, souceIngredient];

describe("Burger ingredients reducer", () => {
  it("should return initial state", () => {
    expect(burgerIngredientsReducer(undefined, {} as TBurgerActions)).toEqual(
      initialState
    );
  });

  it("should set requesting flag", () => {
    expect(
      burgerIngredientsReducer(undefined, { type: GET_INGREDIENTS_REQUEST })
    ).toEqual({
      ...initialState,
      itemsRequesting: true,
    });
  });

  it("should set ingredients", () => {
    expect(
      burgerIngredientsReducer(undefined, {
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: ingredients,
      })
    ).toEqual({
      ...initialState,
      items: ingredients,
    });
  });

  it("should set request failed flag", () => {
    expect(
      burgerIngredientsReducer(undefined, { type: GET_INGREDIENTS_ERROR })
    ).toEqual({
      ...initialState,
      itemsRequestFailed: true,
    });
  });
});

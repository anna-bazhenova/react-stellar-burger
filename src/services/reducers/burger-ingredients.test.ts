import { TBurgerActions } from "../actions/burger-actions";
import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../constants";
import { burgerIngredientsReducer, initialState } from "./burger-ingredients";

const ingredients = [
  {
    _id: "60666c42cc7b410027a1a9b5",
    name: "Говяжий метеорит (отбивная)",
    type: "main",
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b6",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
  },
];

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

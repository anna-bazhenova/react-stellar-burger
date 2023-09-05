import {
  TBurgerActions,
  addBurgerIngredient,
  moveBurgerIngredient,
  removeBurgedIngredient,
} from "../actions/burger-actions";
import { CLEAR_BURGER_INGREDIENTS } from "../constants";
import { burgerConstrustorReducer, initialState } from "./burger-constructor";

const uniqueId = "super duper unique id";
jest.mock("nanoid", () => {
  return { nanoid: () => uniqueId };
});

const bun = {
  _id: "60666c42cc7b410027a1a9b1",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
};

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

describe("Burger constructor reducer", () => {
  it("should return initial state", () => {
    expect(burgerConstrustorReducer(undefined, {} as TBurgerActions)).toEqual(
      initialState
    );
  });

  it("should add bun", () => {
    expect(
      burgerConstrustorReducer(undefined, addBurgerIngredient(bun))
    ).toEqual({
      bun: { ...bun, uniqueId: uniqueId },
      ingredients: [],
    });
  });

  it("should add ingredient", () => {
    expect(
      burgerConstrustorReducer(undefined, addBurgerIngredient(ingredients[0]))
    ).toEqual({
      bun: null,
      ingredients: [{ ...ingredients[0], uniqueId: uniqueId }],
    });
  });

  it("should remove ingredient", () => {
    expect(
      burgerConstrustorReducer(
        {
          bun: { ...bun, uniqueId: uniqueId },
          ingredients: [{ ...ingredients[0], uniqueId: uniqueId }],
        },
        removeBurgedIngredient(0)
      )
    ).toEqual({
      bun: { ...bun, uniqueId: uniqueId },
      ingredients: [],
    });
  });

  it("should move ingredients", () => {
    expect(
      burgerConstrustorReducer(
        {
          bun: { ...bun, uniqueId: uniqueId },
          ingredients: [
            { ...ingredients[0], uniqueId: uniqueId },
            { ...ingredients[1], uniqueId: uniqueId },
          ],
        },
        moveBurgerIngredient(1, 0)
      )
    ).toEqual({
      bun: { ...bun, uniqueId: uniqueId },
      ingredients: [
        { ...ingredients[1], uniqueId: uniqueId },
        { ...ingredients[0], uniqueId: uniqueId },
      ],
    });
  });

  it("should clear burger state", () => {
    expect(
      burgerConstrustorReducer(
        {
          bun: { ...bun, uniqueId: uniqueId },
          ingredients: [
            { ...ingredients[0], uniqueId: uniqueId },
            { ...ingredients[1], uniqueId: uniqueId },
          ],
        },
        {
          type: CLEAR_BURGER_INGREDIENTS,
        }
      )
    ).toEqual(initialState);
  });
});

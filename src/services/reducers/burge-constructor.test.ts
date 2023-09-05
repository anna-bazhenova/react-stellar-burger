import {
  TBurgerActions,
  addBurgerIngredient,
  moveBurgerIngredient,
  removeBurgedIngredient,
} from "../actions/burger-actions";
import { CLEAR_BURGER_INGREDIENTS } from "../constants";
import { burgerConstrustorReducer, initialState } from "./burger-constructor";
import { bun, mainIngredient, souceIngredient } from "./test-fixtures";

const uniqueId = "super duper unique id";
jest.mock("nanoid", () => {
  return { nanoid: () => uniqueId };
});

const ingredients = [mainIngredient, souceIngredient];

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

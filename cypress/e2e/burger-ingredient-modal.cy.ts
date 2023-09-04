import { selectors } from "./selectors";

describe("Burger ingredient modal open and close", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should open modal on ingredient click", () => {
    cy.get(selectors.burgerIngredient).first().click();
    cy.get(selectors.modalWindow).should("exist");
    cy.contains("Детали ингредиента");
  });

  it("should close ingredient popup", () => {
    cy.get(selectors.burgerIngredient).first().click();
    cy.get(selectors.modalCloseButton).click();
    cy.get(selectors.modalWindow).should("not.exist");
  });
});

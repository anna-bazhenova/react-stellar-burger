import { selectors } from "./selectors";

describe("Order creation", () => {
  const email = "ciyav41523@gameszox.com";
  const password = "123456";

  it("should place order", () => {
    cy.visit(`http://localhost:3000/login`);

    cy.get(selectors.loginEmail).type(email);
    cy.get(selectors.loginPassword).type(password);
    cy.get(selectors.loginButton).click();

    cy.get(selectors.bunsSection)
      .find(selectors.burgerIngredient)
      .first()
      .trigger("dragstart");

    cy.get(selectors.burgerConstructor).trigger("drop");

    cy.get(selectors.mainsSection)
      .find(selectors.burgerIngredient)
      .first()
      .trigger("dragstart");

    cy.get(selectors.burgerConstructor).trigger("drop");

    cy.get(selectors.placeOrderButtorn).click();
    cy.get(selectors.orderNumber, { timeout: 30000 }).should("be.visible");
  });
});

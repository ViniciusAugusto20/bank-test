/// <reference types="cypress" />

describe("Balance", () => {

  beforeEach(() => cy.visit(`${Cypress.config('baseUrl')}`));


  it("try to search a valid client", () => {
    cy.get(`#qa-search-item`).click()
    cy.get(`#qa-search-item`).type("Lola Camisaria");
    cy.get("#qa-row-not-found-item").should("not.exist")
  });

  it("try to search a not valid client", () => {
    cy.get(`#qa-search-item`).click()
    cy.get(`#qa-search-item`).type("Arlindo Orlando");
    cy.get("#qa-row-not-found-item").should("exist")
  });

  it("try to see all scheduleds transfers", () => {
    cy.get(`#qa-scheduler-button`).click()
  });


});

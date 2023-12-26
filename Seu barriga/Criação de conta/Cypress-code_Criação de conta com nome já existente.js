describe("Criação de conta com nome já existente", () => {
  it("fluxo de exceção", async () => {
    cy.visit("https://seubarriga.wcaquino.me/");

    cy.get(`.dropdown-toggle`).click();

    cy.get(`.dropdown-menu > :nth-child(1) > a`).click();

    cy.get(`#nome`).click();

    cy.get(`#nome`).type(`minhanovaconta`);

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Já existe uma conta com esse nome!`)
  })
})
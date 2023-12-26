describe("Criação de conta com nome válido 2", () => {
  it("fluxo alternativo", async () => {
    cy.visit("https://seubarriga.wcaquino.me/");

    cy.get(`.dropdown-toggle`).click();

    cy.get(`.dropdown-menu > :nth-child(2) > a`).click();

    cy.get(`:nth-child(1) > :nth-child(2) > :nth-child(2) > .glyphicon`).click();

    cy.get(`.alert`).should("be.visible").contains(`Conta removida com sucesso!`)

    cy.get(`.dropdown-toggle`).click();

    cy.get(`.dropdown-menu > :nth-child(1) > a`).click();

    cy.get(`#nome`).click();

    cy.get(`#nome`).type(`minhanovaconta`);

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Conta adicionada com sucesso!`)
  })
})
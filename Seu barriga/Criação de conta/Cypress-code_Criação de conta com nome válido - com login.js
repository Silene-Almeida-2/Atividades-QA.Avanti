describe("Criação de conta com nome válido - com login", () => {
  it("fluxo principal", async () => {
    cy.visit("https://seubarriga.wcaquino.me/login");

    cy.get(`#email`).click();

    cy.get(`#email`).type(`caiquetester@email.com`);

    cy.get(`#senha`).click();

    cy.get(`#senha`).type(`qualitribo1234`);

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Bem vindo, caique testador!`)

    cy.get(`.dropdown-toggle`).click();

    cy.get(`.dropdown-menu > :nth-child(1) > a`).click();

    cy.get(`#nome`).click();

    cy.get(`#nome`).type(`minhanovaconta`);

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Conta adicionada com sucesso!`)
  })
})
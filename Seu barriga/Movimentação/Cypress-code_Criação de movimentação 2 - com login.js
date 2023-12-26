describe("Criação de movimentação 2 - com login", () => {
  it("Fluxo alternativo", async () => {
    cy.visit("https://seubarriga.wcaquino.me/login");

    cy.get(`#email`).click();

    cy.get(`#email`).type(`sallesagatasalles19@gmail.com`);

    cy.get(`#senha`).click();

    cy.get(`#senha`).type(`Lorena25!`);

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Bem vindo, Agata Sales!`)

    cy.get(`.dropdown-toggle`).click();

    cy.get(`.dropdown-menu > :nth-child(1) > a`).click();

    cy.get(`#nome`).click();

    cy.get(`#nome`).type(`Aluguel 03`);

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Conta adicionada com sucesso!`)

    cy.get(`:nth-child(3) > a`).click();

    cy.get(`#data_transacao`).click();

    cy.get(`#data_transacao`).type(`04/12/2023`);

    cy.get(`#data_pagamento`).click();

    cy.get(`#data_pagamento`).type(`31/12/2023`);

    cy.get(`#descricao`).click();

    cy.get(`#descricao`).type(`Pagamento Aluguel 02`);

    cy.get(`#interessado`).click();

    cy.get(`#interessado`).type(`eu`);

    cy.get(`#status_pago`).click();

    cy.get(`#conta`).click();

    cy.get(`#conta`).click();

    cy.get(`#valor`).click();

    cy.get(`#valor`).type(`850`);

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Movimentação adicionada com sucesso!`)
  })
})
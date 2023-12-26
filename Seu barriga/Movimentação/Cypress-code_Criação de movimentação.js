describe("Criação de movimentação", () => {
  it("Fluxo principal", async () => {
    cy.visit("https://seubarriga.wcaquino.me/");

    cy.get(`:nth-child(3) > a`).click();

    cy.get(`#data_transacao`).click();

    cy.get(`#data_transacao`).type(`01/12/2023`);

    cy.get(`#data_pagamento`).click();

    cy.get(`#data_pagamento`).type(`30/12/2023`);

    cy.get(`#descricao`).click();

    cy.get(`#descricao`).type(`Pagamento Aluguel Dezembro`);

    cy.get(`#interessado`).click();

    cy.get(`#interessado`).type(`eu`);

    cy.get(`#valor`).click();

    cy.get(`#valor`).type(`1200`);

    cy.get(`#conta`).click();

    cy.get(`#conta`).click();

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Movimentação adicionada com sucesso!`)
  })
})
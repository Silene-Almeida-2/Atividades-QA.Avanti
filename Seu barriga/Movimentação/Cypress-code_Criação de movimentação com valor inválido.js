describe("Criação de movimentação com valor inválido", () => {
  it("Fluxo de exceção", async () => {
    cy.visit("https://seubarriga.wcaquino.me/");

    cy.get(`:nth-child(3) > a`).click();

    cy.get(`#data_transacao`).click();

    cy.get(`#data_transacao`).type(`04/12/2023`);

    cy.get(`#data_pagamento`).click();

    cy.get(`#data_pagamento`).type(`31/12/2023`);

    cy.get(`#descricao`).click();

    cy.get(`#descricao`).type(`Pagamento Aluguel`);

    cy.get(`#interessado`).click();

    cy.get(`#interessado`).type(`eu`);

    cy.get(`:nth-child(3) > :nth-child(3) > div`).click();

    cy.get(`#status_pago`).click();

    cy.get(`#valor`).click();

    cy.get(`#valor`).type(`85,00`);

    cy.get(`#conta`).click();

    cy.get(`#conta`).click();

    cy.get(`.btn`).click();

    // TODO: create instructions for 'submit'

    cy.get(`.alert`).should("be.visible").contains(`Valor deve ser um número`)
  })
})
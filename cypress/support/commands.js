Cypress.Commands.add('preencherCadastro', (nome, email, senha = '12345678') => {
    cy.get('#nome').type(nome);
    cy.get('#email').type(email);
    cy.get('#senha').type(senha);
    cy.get('.btn.btn-primary').click();
  });
  
  Cypress.Commands.add('validarMensagem', (tipo, mensagem) => {
    const seletor = tipo === 'sucesso' ? '.alert-success' : '.alert-danger';
    cy.get(seletor).should('contain', mensagem);
  });
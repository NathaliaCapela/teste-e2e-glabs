/// <reference types ="Cypress"/>


describe('Testes Funcional de Login', () => {
    it.only('Deve realizar o login com sucesso ', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.title').should('contain','Products')
    });

    it.only('Validando Login incorreto  ', () => {
        cy.login_teste('incorreto','secret_sauce')
        cy.get('[data-test="error"]'). should('contain','Epic sadface: Username and password do not match any user in this service')
       
});
    
it.only('Validando Senha incorreta  ', () => {
    cy.login_teste('standard_use','incorreto')
    cy.get('[data-test="error"]'). should('contain','Epic sadface: Username and password do not match any user in this service')
    cy.get('[data-test="login-button"]').click()

});
});


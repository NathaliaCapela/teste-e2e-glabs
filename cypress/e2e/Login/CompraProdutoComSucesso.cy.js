/// <reference types ="Cypress"/>


describe('Teste E2E - Realizando compra de produtos com sucesso', () => {
    
});

it('Fluxo da compra de produtos', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain','Products')

    // Ordenação de produtos de menor para maior valor:
    cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

    //Validaçãp da ordenação desses produtos:
    cy.get('.select_container').type('{downarrow}')
    cy.get(':nth-child(1) > .inventory_item_description').select('Price (low to high)').should('contain', 'Sauce Labs Onesie')
    cy.get(':nth-child(2) > .inventory_item_description').select('Price (low to high)').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(3) > .inventory_item_description').select('Price (low to high)').should('contain', 'Sauce Labs Bolt T-Shirt')

});


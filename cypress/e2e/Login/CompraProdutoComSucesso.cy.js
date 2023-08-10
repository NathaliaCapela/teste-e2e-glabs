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

    //Validação da ordenação desses produtos:
    cy.get('.select_container').type('{downarrow}')
    cy.get(':nth-child(1) > .inventory_item_description').should('contain', 'Sauce Labs Onesie')
    cy.get(':nth-child(2) > .inventory_item_description').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(3) > .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt')

    //Adicionando produto ao carrinho:
    cy.get('#item_2_title_link > .inventory_item_name').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="back-to-products"]').click()

    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="back-to-products"]').click()

    cy.get('#item_1_title_link > .inventory_item_name').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="back-to-products"]').click()




});


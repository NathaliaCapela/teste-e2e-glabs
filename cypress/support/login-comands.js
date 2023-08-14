/// <reference types ="Cypress"/>

Cypress.Commands.add ('login_teste',(user,passward)=>{
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(passward)
    cy.get('[data-test="login-button"]').click()
})
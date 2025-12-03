///<reference types="cypress" />

describe("Seccion 1 Validando el título ", () => {
    it('Test Validar el título', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')

        cy.log("Ok, la función title funciona bien")
        
    });
})
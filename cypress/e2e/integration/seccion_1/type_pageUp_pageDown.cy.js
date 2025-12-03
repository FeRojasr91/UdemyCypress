/// <reference types="cypress" />

describe("Ejemplo de Type pageUp y pageDown", () => {

    it('Type pageUp', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type('{pageup}')
        cy.wait(2000)        
    });

    it('Type pageDown', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type('{pagedown}')
        cy.wait(2000)        
    });

    // Si quiero correr uno de los ejercicios u otros, solo debo agregarle el it.only
})
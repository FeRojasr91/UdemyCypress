///<reference types="cypress" />
require('cypress-xpath');

describe('Select', () => {
    it('select uno', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should('eq','Automation Testing Practice')
        cy.wait(1000)

        cy.get('#country').should('be.visible').select("Canada").should('have.value','canada')
        cy.wait(1000)
        cy.get('#country').should('be.visible').select("Germany").should('have.value','germany')
        cy.wait(1000)     
      
    });

    it('select dos', () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        cy.wait(1000)

        cy.get('#APjFqb').should('be.visible').type("Ferrari").type("{enter}")        
      
    });

    it.only('select tres', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should('eq','Automation Testing Practice')
        cy.wait(1000)

        cy.get('#country').should('be.visible').select("India","Germany","Canada").then( ()=>{ //si los seleccionas hace lo siguiente
            cy.get().should('be.visible').click() //Se deja asi ya que funciona distinto en la pagina usada



        })
        cy.wait(5000)
    });

});
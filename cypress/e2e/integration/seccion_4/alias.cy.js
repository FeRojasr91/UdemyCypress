///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Manejo de los Alias", () =>{
    it('Alias uno', () => {
        let tiempo = 500
        cy.visit("https://testpages.herokuapp.com/apps/client-server-form-validation/")
        cy.title('eq','Validated Client Server Form | Test Pages')
        cy.wait(tiempo)   
        
        
        cy.get('#firstname').should('be.visible').as('nom')
        cy.get('@nom').type('Pedro')

        cy.get('#surname').should('be.visible').as('ap')
        cy.get('@ap').type('Perez Peres')

        cy.get('#age').should('be.visible').as('edad')
        cy.get('#country').should('be.visible').as('pais')
        cy.get('#notes').should('be.visible').as('nota')

        cy.get('@edad').type('40')
        cy.get('@pais').select('Chile').should('have.value','Chile')        
        cy.get('@nota').type('Demo del contenido')

        
        cy.get('input[type=submit]').click()
    })
})
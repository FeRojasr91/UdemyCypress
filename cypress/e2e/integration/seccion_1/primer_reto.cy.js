///<reference types="cypress" />
require('cypress-plugin-tab');


describe("Primer Reto ", () => {
    it('Primer Reto', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#searchBox').should('be.visible').type('Cierra')
        cy.wait(1000)
        cy.get('#searchBox').should('be.visible').clear()

        //Agregando campo
        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.wait(1000)

        cy.get('#firstName').should('be.visible').type('Juan').tab().
        type('Perez').tab().
        type('juan@gmail.com').tab().
        type('30').tab().
        type('250000').tab().
        type('Sistemas')

        cy.get('#submit').should('be.visible').click()

        cy.get('#searchBox').should('be.visible').type('Juan')
        cy.wait(1000)
        cy.get('#searchBox').should('be.visible').clear()

        //Editar campo

        cy.get('#edit-record-2').should('be.visible').click()
        cy.wait(1000)

        cy.get('#age').should('be.visible').clear().type('35')
        cy.get('#salary').should('be.visible').clear().type('300000')
        cy.get('#submit').should('be.visible').click()

        //Eliminar campo

        cy.wait(2000)
        cy.get('#delete-record-1').should('be.visible').click()
        cy.wait(1000)

        
    });
        
    
})
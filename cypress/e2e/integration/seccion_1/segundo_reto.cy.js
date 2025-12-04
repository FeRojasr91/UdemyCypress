///<reference types="cypress" />
require('cypress-xpath');

describe("Segundo Reto", () => {
    it('Probando', () => {
        cy.visit("http://computer-database.gatling.io/computers") //Página no funciona
        cy.title().should('eq','Computers database')
        cy.wait(1500)
        

        //Buscando

        cy.xpath("//input[contains(@id,'searchbox')]").should('be.visible').type('ACE')
        cy.get('#searchsubmit').should('be.visible').click()     
        
        //add

        cy.get("#add").should('be.visible').click()
        cy.get("[name='name']").should('be.visible').type('cypress')
        cy.get("#introduced").should('be.visible').type('2024-01-01').tab().type('2025-01-01')
        //combo
        cy.get("#company").should("be.visible").select('Nokia').should('have.value','16').wait(1500)
        cy.get(".primary").should('be.visible').click()
        cy.xpath("input[contains(@id,'searchbox')]").type("cypress")
        cy.get('#searchsubmit').should('be.visible').click() 
    
    });
})
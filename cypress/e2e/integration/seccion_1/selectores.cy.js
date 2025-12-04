///<reference types="cypress" />
require('cypress-xpath')


describe("Tipos de selectores ", () => {
    it('Selector por id', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').type('Carlos')
        cy.get('#userEmail').should('be.visible').type('car@email.com')

    });

    it('Selector por atributo', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('input[placeholder="Full Name"]').should('be.visible').type('Ana Maria')
    });

    it('Selector por Xpath', () => {
        //Antes se debe instalar el plugin: npm install -D cypress-xpath
        //Y agregar  require('cypress-xpath')
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.xpath('//*[@id="userName"]').should('be.visible').type('Pedro Luis')
    });

    it('Selector por contains', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('.custom-control-label').contains('Female').click()
        cy.wait(1000)
        cy.get('.custom-control-label').contains('Other').click()
        cy.wait(1000)

        
    });

    it.only('Selector por copySelector', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userNumber').should('be.visible').type('1234567890')       

     
    });

        
})
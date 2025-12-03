///<reference types="cypress" />
require('cypress-plugin-tab')
//para instalar, se usa el comando: npm install -D cypress-plugin-tab

describe("Ejemplo funcion Tab ", () => {
    it('Type con Tab', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#firstName').type("Rodrigo").tab().
        type("Villanueva").tab().
        type("rodrigo@gmail.com")

    });
        
    
})
///<reference types="cypress" />


describe("Introduccion a los assert ", () => {
    it("Demo de los Asserts ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").should('be.visible').type("Juan")
        cy.get('#lastName').should('be.visible').type("Perez")
        cy.get('#userEmail').should('be.visible').should('be.enabled').type("juan@gmail.com")

        

    });
        
    
})
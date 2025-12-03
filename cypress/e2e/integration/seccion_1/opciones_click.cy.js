///<reference types="cypress" />


describe("Opciones de click ", () => {
    it("Click Sencillo ", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.title().should('eq','Swag Labs')
        cy.wait(1000)

        cy.get('[data-test="login-button"]').should('be.visible').click()  

    
    });

    it("Click Sencillo2 ", () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

         cy.get('.brands-name > .nav > :nth-child(5) > a').should('be.visible').click()
         cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').should('be.visible').click()

    
    });

    it("Click Force-true ", () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

         cy.get('.brands-name > .nav > :nth-child(5) > a').should('be.visible').click()
         cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').should('be.visible').click({force:true})

    
    });

    it.only("Click por coordenadas ", () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

         cy.get('.brands-name > .nav > :nth-child(5) > a').should('be.visible').click()
         cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > img').click(50,5)
         cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > img').click(70,5)

    
    });
        
    
})
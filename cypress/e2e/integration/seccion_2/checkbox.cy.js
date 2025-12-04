///<reference types="cypress" />
require('cypress-xpath');

describe('Nueva seccion checkbox', () => {
    it('check uno', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should('eq','Automation Testing Practice')
        cy.wait(1000)

        cy.get('input[type="checkbox"]').check().should("be.checked") //validar que estén chequeados
        cy.wait(2000)
        cy.get('input[type="checkbox"]').uncheck().should("not.be.checked") //validar que no estén chequeados
        
    });

    it('check por seleccion', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should('eq','Automation Testing Practice')
        cy.wait(1000)

        //cy.get('#saturday').check().should("be.checked")
        //cy.xpath('//*[@id="productTable"]/tbody/tr[1]/td[4]/input').check()

        /**Otra forma de seleccionar el checkbox: */

        cy.get('#saturday').click()
        cy.xpath('//*[@id="productTable"]/tbody/tr[1]/td[4]/input').click()
        cy.wait(1000)

        
    });

    it.only('radio button', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should('eq','Automation Testing Practice')
        cy.wait(1000)

        cy.get('#male').click().should("be.checked")

        

        
    });
});
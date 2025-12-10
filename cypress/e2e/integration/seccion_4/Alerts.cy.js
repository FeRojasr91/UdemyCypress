///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Alerts", () =>{
    it('Alerts', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)

        cy.get('#confirmBtn').should('be.visible').click()

        
    })
})
///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Campos de tipo fecha", () =>{
    it('fecha uno', () => {
        let tiempo = 1000
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should("eq","Automation Testing Practice")
        cy.wait(tiempo)

        cy.get('#datepicker').should('be.visible').type('09/19/2021').then (()=> {
            cy.get('#datepicker').should('be.visible').type('{esc}')
        })
        cy.wait(tiempo)

        cy.get('#txtDate').should('be.visible').click()
        cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(3) > td:nth-child(4) > a').click({force:true})
        cy.wait(tiempo)       
        
    });


    it.only('fecha dos', () => {
        let tiempo = 1000
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should("eq","Automation Testing Practice")
        cy.wait(tiempo)

        cy.get('#start-date').should('be.visible').type('2001-06-20')
        cy.get('#end-date').should('be.visible').type('2003-01-13')      
                   
    });

    it.only('fecha tres', () => {
        let tiempo = 1000
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should("eq","Automation Testing Practice")
        cy.wait(tiempo)

        cy.get('#start-date').should('be.visible').type('2001-06-20').tab().type('2003-01-13')      
                   
    });
})
///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Elementos de una tabla", () =>{
    it('Children', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)

        cy.get('.table-container').children('#productTable')
        cy.get('.table-container').children('#productTable').should("contain","Smartphone").click({force:true})
        cy.wait(tiempo)        


    });


    it.only('Seleccionar por medio de EQ', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)

        cy.get('[id="alertBtn"]').eq(0).should("contain","Simple Alert").click({force:true})

        
        

    });
    


    
})
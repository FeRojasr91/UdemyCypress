///<reference types="cypress" />

require ('cypress-xpath')
require ('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe ("Cypress eventos Mouse", () =>{
    it('drag and drop', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should("eq","Automation Testing Practice")
        cy.wait(1000)

        cy.get('#draggable').drag('#droppable',{force:true}) 
    
    });


    it('drag and drop 2', () => {
        cy.visit("https://demoqa.com/droppable")
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        
        cy.get('#droppableExample-tab-accept').click()
        cy.wait(1000)
        cy.get('#acceptable').drag('#droppable', {force:true})
        cy.wait(1000)
        cy.get('#notAcceptable').drag('#droppable', {force:true})        
    
    });

    it('seleccionar opcion, se abre pestaña nueva', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should("eq","Automation Testing Practice")
        cy.wait(1000)

        
        //Si la página se abriera bajo un atributo "target", se podría trabajar de la siguiente manera:
        /*cy.contains("New Tab").invoke("removeAttr","target").click()
        */


        //Por el tipo de URL que estoy usando señalan hacer lo siguiente:
        cy.window().then((win) => {
            cy.stub(win, "open").callsFake((url) => {
                win.location.href = url;   // abre la URL en la MISMA ventana
            });
        });
        cy.contains("New Tab").click();    
    });
    
    it.only('Mouse Slider', () => {
        let tiempo = 1000
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should("eq","Automation Testing Practice")
        cy.wait(tiempo)

        cy.xpath('//*[@id="slider-range"]/span[1]').invoke("attr", "style","left: 20.2%;")
        cy.wait(tiempo)
        cy.xpath('//*[@id="slider-range"]/span[2]').invoke("attr", "style","left: 80.2%;")

        cy.wait(tiempo)
    
    });


});
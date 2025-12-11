///<reference types='cypress'/>
import 'cypress-file-upload'
require ('cypress-xpath')
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ('Reto de la funcion Hooks', () =>{
    let tiempo = 1000
    
    before(()=>{
        cy.visit('https://automationexercise.com/')
        cy.title().should('eq','Automation Exercise')
        cy.wait(tiempo)
    })
    
    it('test', () => {
        cy.log("Hola")

    })
})
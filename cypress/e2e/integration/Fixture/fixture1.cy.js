///<reference types='cypress'/>
import 'cypress-file-upload'
require ('cypress-xpath')
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ('Carga por Fixture', () =>{
    let tiempo = 1000
    
    /*before(function(){
        cy.fixture('datos').then(function(data){
            globalThis.data=data
        })
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.title().should('eq','Automation Testing Practice')
        cy.wait(tiempo)
    })*/
    // A continuacion se trabaja fixture sobre alias:
    before(function(){
        cy.fixture('datos').as('datos_json') //se agrega esto para usar como alias
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.title().should('eq','Automation Testing Practice')
        cy.wait(tiempo)
    })
    
    it('test uno cargando por Json', () => {

        cy.get('@datos_json').then((data)=>{ // se agrega esto, dejando los cy.get adentro cuando usamos alias.

            cy.get('#name').should('be.visible').type(data.nombre)
            cy.get('#email').should('be.visible').type(data.email)        
            cy.get('#phone').should('be.visible').type(data.fono)        
            cy.get('#textarea').should('be.visible').type(data.direccion)
            cy.wait(tiempo)      
            cy.get('.submit-btn').should('be.visible').click()
        })
    })
})
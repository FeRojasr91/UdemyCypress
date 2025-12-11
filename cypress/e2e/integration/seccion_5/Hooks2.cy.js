///<reference types='cypress'/>
import 'cypress-file-upload'
require ('cypress-xpath')
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ('Hooks Ejemplos', () =>{
    let tiempo = 500
    beforeEach(()=>{
               
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)
    })
    
    
    it('test uno', () => {
        cy.get('[type=checkbox]').check().should('be.checked')
        cy.wait(tiempo)        
    })

    it('test dos', () => {
        cy.get('[type=checkbox]').uncheck().should('not.be.checked')
        cy.wait(tiempo)        
    })

    it('test tres', () => {
        cy.xpath('//*[@id="sunday"]').check().should('be.checked')
        cy.wait(tiempo)        
    })
})
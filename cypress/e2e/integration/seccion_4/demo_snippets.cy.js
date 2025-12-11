///<reference types='cypress'/>
import 'cypress-file-uplaod'
require ('cypress-xpath')
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ('descripcion', () =>{
    it('test', () => {
        let tiempo = 500
        
        cy.visit('url pagina')
        cy.title('eq','titulo')
        cy.wait(tiempo)
    })
})
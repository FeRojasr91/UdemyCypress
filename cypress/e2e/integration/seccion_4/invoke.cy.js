///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Manejo de invoke", () =>{
    it('invoke uno', () => {
        let tiempo = 500
        cy.visit("https://testpages.herokuapp.com/apps/client-server-form-validation/")
        cy.title('eq','Validated Client Server Form | Test Pages')
        cy.wait(tiempo)

        cy.get('.td-content > :nth-child(7)').invoke('text').as('info')

        cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')

        cy.xpath('/html/body/div/div/div/main/div/div[2]/form/label[1]').invoke('text').as('title_name')

        cy.get('@title_name').should('contain','First name:').then (()=>{
            cy.get('#firstname').type("Rodrigo")

        })
    })

    it.only('invoke estilos', () => {
        let tiempo = 500
        cy.visit("https://testpages.herokuapp.com/apps/client-server-form-validation/")
        cy.title('eq','Validated Client Server Form | Test Pages')
        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("attr","style","color:Blue; font-size: 50px") //Si quiero que resalte por ejemplo ese campo

    })
    

})
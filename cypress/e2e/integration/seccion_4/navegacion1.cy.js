///<reference types="cypress" />
require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')



describe('Navegar entre paginas', () => {
    it('back y forward', () => {
        cy.visit('https://testpages.herokuapp.com/')
        cy.title('eq','Test Pages')
        cy.wait(1000)

        cy.get('#m-pages > span').should('be.visible').click()
        cy.wait(1000)

        cy.xpath('//*[@id="m-pagesbasics"]/span').should('be.visible').click({force:true})
        cy.wait(1000)

        cy.go("back")
        cy.go("back")

        cy.go("forward")
        cy.go("forward")
    });

    it.only('Reload', () => {
        let tiempo=1000

        cy.visit('https://testpages.herokuapp.com/')
        cy.title('eq','Test Pages')
        cy.wait(tiempo)

        cy.xpath('//*[@id="m-apps"]/span').should('be.visible').click()
        cy.wait(tiempo)

        cy.xpath('//*[@id="m-appsclient-server-form-validation"]/span').should('be.visible').click()
        cy.wait(tiempo)

        cy.get('#firstname').should('be.visible').type('Juan')
        cy.wait(tiempo)

        cy.get('#surname').should('be.visible').type('Lopez Lagos')
        cy.wait(tiempo)

        cy.reload()

        cy.wait(tiempo)

        cy.go("back")        
    });
});
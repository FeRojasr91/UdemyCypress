///<reference types="cypress" />

describe('Primer Test con Cypress', () => {
    it.skip('Esto es un hola mundo desde Cypress', () => {
        cy.log("Bienvenido a Cypress")    
        cy.visit('https://testingqarvn.com.es/datos-personales/') //Esta página está caida, por tanto se deja test en skip

        cy.get("#wsf-1-field-21").type("Rodrigo")
        cy.wait(3000)
        cy.get("#wsf-1-field-22").type("Villanueva")

        cy.wait(3000)
    })

    it('Segundo test -> campo name',() => {
        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type("Fer")
        cy.wait(4000)
    })
});//Cierre de describe
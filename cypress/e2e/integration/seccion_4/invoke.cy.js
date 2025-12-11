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

    it('invoke estilos', () => {
        let tiempo = 500
        cy.visit("https://testpages.herokuapp.com/apps/client-server-form-validation/")
        cy.title('eq','Validated Client Server Form | Test Pages')
        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("attr","style","color:Blue; font-size: 80px") //Si quiero que resalte por ejemplo ese campo

    })

    it('invoke ocultar y mostrar', () => {
        let tiempo = 1500

        cy.visit("https://testpages.herokuapp.com/apps/client-server-form-validation/")
        cy.title('eq','Validated Client Server Form | Test Pages')
        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("hide") 
        cy.get('#firstname').invoke("hide") 

        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("show")
        cy.get('#firstname').invoke("show") 

    })

    it('reto invoke ocultar y mostrar', () => {
        let tiempo = 2500

        cy.visit("https://testpages.herokuapp.com/apps/client-server-form-validation/")
        cy.title('eq','Validated Client Server Form | Test Pages')
        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(tiempo)

        cy.get('#firstname').should('be.visible').type('Carlos').then (()=>{ //Cuando escribas en el campo firstname, aparecerá todo lo relacionado al campo lastname
            cy.get('[for="surname"]').invoke("show")
            cy.get('#surname').invoke("show")
            cy.get('#surname').type("Olmos Salgado")
            cy.wait(tiempo)

        })      

    })

    it('invoke src', () => {
        let tiempo = 1500

        cy.visit("https://automationexercise.com/")
        cy.title('eq','Automation Exercise')       
        cy.wait(tiempo)

        //Validamos que la imagen exista gracias a su atributo src:
        cy.xpath('//*[@id="header"]/div/div/div/div[1]/div/a/img').invoke("attr","src").should("include","/home/logo.png")
    })

    it.only('invoke target', () => {
        let tiempo = 1500

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')       
        cy.wait(tiempo)

        //Validamos que la imagen exista gracias a su atributo src:
        cy.xpath('//*[@id="HTML4"]/div[1]/button').invoke("removeAttr","onclick").click()
    }) 

})
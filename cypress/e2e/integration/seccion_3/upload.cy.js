///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'

describe ("Upload imagenes", () =>{
    it('cargando imagenes', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        const ruta = 'imagen.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)
        
    });
})
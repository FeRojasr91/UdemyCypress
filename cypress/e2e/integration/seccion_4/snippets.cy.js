///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Configuracion y uso de los Snippets", () =>{
    it('Snippets uno', () => {
        let tiempo = 500

        cy.visit("https://testpages.herokuapp.com/apps/client-server-form-validation/")
        cy.title('eq','Validated Client Server Form | Test Pages')
        cy.wait(tiempo)


        cy.get('#firstname').should('be.visible').type("Rodrigo")

        //Se enseña a que usando c_text, puedes validar los snippets que tengas para mejorar los tiempos
        //en que escribes tu código, pasando ya un IT, alguna validacion, etc.    
        
        //Ver https://code.visualstudio.com/docs/editing/userdefinedsnippets
        //Clase p3 udemy

        cy.get('#firstname').should('be.visible').type('Carlos')
        cy.wait(tiempo)

    })

    

})




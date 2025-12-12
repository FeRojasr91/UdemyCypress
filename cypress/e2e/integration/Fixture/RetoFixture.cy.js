///<reference types='cypress'/>
import 'cypress-file-upload'
require ('cypress-xpath')
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ('Carga por Fixture', () =>{
    let tiempo = 1000    
     
    it('test uno cargando desde Json', () => {

        //Recorrer todos los datos del fixture (datos2)
        cy.fixture('datos2').then(testdata =>{
            testdata.forEach(data =>{
                const d_nombre=data.nombre
                const d_email=data.email
                const d_fono=data.fono
                const d_direccion=data.direccion

                cy.visit('https://testautomationpractice.blogspot.com/')
                cy.title().should('eq','Automation Testing Practice')
                cy.wait(tiempo)

                cy.get('#name').should('be.visible').type(d_nombre)
                cy.get('#email').should('be.visible').type(d_email)        
                cy.get('#phone').should('be.visible').type(d_fono)        
                cy.get('#textarea').should('be.visible').type(d_direccion)
                cy.wait(tiempo)      
                cy.get('.submit-btn').should('be.visible').click()
            })
        })            
    })
})
/**Para generar archivos Json más grandes para usar en fixture, se puede utilizar la pagina: https://mockaroo.com/ */
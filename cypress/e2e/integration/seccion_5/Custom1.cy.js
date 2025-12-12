///<reference types='cypress'/>
import 'cypress-file-upload'
require ('cypress-xpath')
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ('Comandos Personalizados', () =>{
    let tiempo = 1000
    
    before(()=>{
        cy.visit('https://testpages.herokuapp.com/apps/client-server-form-validation/')
        cy.title().should('eq','Validated Client Server Form | Test Pages')
        cy.wait(tiempo)
    })
    
    it.only('Demo uno', () => {
        cy.Texto_visible('#firstname','Juan')
        cy.Texto_visible('#surname','Perez Reyes')
        cy.Texto_visible_xpath('//*[@id="age"]','43')
        cy.Texto_visible_select('#country','Andorra')        
        cy.screenshot("Campo ciudad")        
        cy.Texto_visible_xpath('//*[@id="notes"]', 'Hola Mundo')
        cy.Boton_click('input[type="submit"]')
          

    })

    it('Demo dos', ()=>{
        cy.Bloque_TestPages('Juan','Perez Reyes','43','Andorra','Hola Mundo')   
    })
})
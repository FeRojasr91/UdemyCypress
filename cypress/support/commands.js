// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.on('uncaught:exception', (err, runnable) => {
  return false; 
}); //Evitar errores de la página al automatizar, no del código.

Cypress.Commands.add("Texto_visible", (selector,texto)=>{
  cy.get(selector).should('be.visible').type(texto)  
});

Cypress.Commands.add("Texto_visible_xpath", (selector,texto)=>{
  cy.xpath(selector).should('be.visible').type(texto)  
});

Cypress.Commands.add("Texto_visible_select", (selector,texto)=>{
  cy.get(selector).should('be.visible').select(texto)  
});

Cypress.Commands.add("Texto_visible_select_xpath", (selector,texto)=>{
  cy.xpath(selector).should('be.visible').select(texto)  
});

Cypress.Commands.add("Boton_click", (selector)=>{
  cy.get(selector).should('be.visible').click()  
});

Cypress.Commands.add("Boton_click_xpath", (selector)=>{
  cy.xpath(selector).should('be.visible').click()  
});


//Funciones por conjunto o completas
//Creando la funcion TestPages
//https://testpages.herokuapp.com/apps/client-server-form-validation/

Cypress.Commands.add("Bloque_TestPages",(nombre,apellido,edad,pais,notas)=>{
  cy.get('#firstname').should('be.visible').type(nombre)
  cy.get('#surname').should('be.visible').type(apellido)
  cy.xpath('//*[@id="age"]','43').should('be.visible').type(edad)
  cy.get('#country').should('be.visible').select(pais)
  cy.xpath('//*[@id="notes"]').should('be.visible').type(notas)
  cy.get('input[type="submit"]').should('be.visible').click()
})

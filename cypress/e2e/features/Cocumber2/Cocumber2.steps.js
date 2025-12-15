
// cypress/e2e/steps/Cocumber2.steps.js
const { Given, When, Then, And } = require('@badeball/cypress-cucumber-preprocessor');

Given('Abrir el navegador principal', () => {
  cy.visit('https://demoqa.com/text-box');
});

When('Cargando el nombre {word}',(Name) => {
  cy.get('#userName').should('be.visible').type(Name);
  cy.wait(500);
});

When('Cargando el email {word}', (email) => {
  cy.get('#userEmail').should('be.visible').type(email);
  cy.wait(500);
});

When('Cargando la Dirección {string}', (dir) => {
  cy.get('#currentAddress').should('be.visible').type(dir);
  cy.wait(500);
});

When('Cargando la Dirección dos {string}', (dir2) => {
  cy.get('#permanentAddress').should('be.visible').type(dir2);
  cy.wait(500);
});

When('Click en Button', () => {
  cy.get('#submit').should('be.visible').click();
  cy.wait(500);
});

Then('Validar el nombre de la Página', () => {
  cy.title().should('eq', 'DEMOQA');
  cy.wait(1000);
});

///<reference types="cypress" />
require('cypress-xpath');

describe('Asserts', () => {
    it('Assert contain', () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        cy.get('#accordian').contains("Women").click() //el #accordian es el padre del containt "Women" referenciado.         
      
    });

    it('Assert find, eq', () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)       
        
        cy.get('.features_items').find('.product-image-wrapper').eq(2).find('.choose').click()//al usar e(0) va a tomar el primer elemento de la clase encontrada.       
                
      
    });

    it('Assert find, eq, validando que la ropa sea nueva y precio', () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)       
        
        cy.get('.features_items').find('.product-image-wrapper').eq(3).find('.choose').click()//al usar e(0) va a tomar el primer elemento de la clase encontrada.
        
        cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[3]').then ((e) =>{
            //cy.log(e.text())
            let estado=e.text()
            //cy.log(estado)
            if (estado.includes("New")){
                cy.log("La prenda es nueva")
            }
        }) // de esta forma puedo saber que la validación que elijo tenga la palabra New.
        // o pude haber utilizado: .should('contain','New')

        cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/span').then ((p) => {
            //cy.log(p.text())
            /*si el precio tuviera el signo dolar u otro y lo quiero cortar usar:
            let precio=p.text().slice(1) y para validar por pantalla el resultado puedo usar cy.log(precio)
            */
            let precio=p.text().slice(4) // con esto solo dejo los valores numericos.
            if (precio <= 1000){
                cy.log("El precio Rs. "+ precio + " esta dentro de nuestro presupuesto, lo podemos comprar")
                cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/button').click()
                cy.wait(5000)
            }else{
                cy.log("El precio Rs. " + precio + " no esta dentro de nuestro presupuesto, no lo podemos comprar")
                cy.xpath('//*[@id="header"]/div/div/div/div[1]/div/a/img').click()
                cy.wait(5000)
            }            
            
        })       
        
    });

    it.only('Assert contain', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').type("Juan Perez")
        cy.get('#userEmail').should('be.visible').type("juan@email.com")
        cy.get('#submit').should('be.visible').click()

        //A continuacion validamos que nuestro campo tenga el texto ingresado.

        cy.get('#name').should('have.text','Name:Juan Perez')
        cy.get('#name').should('contain.text','Juan Perez')

        
    });

});
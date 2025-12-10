///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Bucles for y each", () =>{
    it('for uno', () => {     
        
        for (let i=1; i<=10;i=i+2){
            cy.log("Numero: " + i)
        }
                
    });

    it('for dos', () => {

        for (let i=1; i<=10; i++){
            let t=5
            cy.log(t + " x " + i + " = " + t*i)
        }
        
    });

    it('Each uno', () => {

        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        cy.get('.productinfo.text-center > p').each(($el,index,$list)=>{    //recorremos los elementos de la página       
           
            let ropa=$el.text()
            cy.log(ropa)

        })
        
    });

    it('Each dos', () => {

        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        cy.get('.productinfo.text-center > p').each(($el,index,$list)=>{    //recorremos los elementos de la página       
           
            let ropa=$el.text()
            if (ropa.includes("Printed Off Shoulder Top - White")){                
                cy.wrap($el).click()//agarra los elementos que se recorren para poder elegir un elemento
                cy.wait (1000)
                cy.get(':nth-child(15) > .product-image-wrapper > .choose > .nav > li > a').click() // se le agrega esto, solo porque el boton está abajo
                cy.wait(1000)
            }
        })
        
    });


    it('Each tres', () => {

        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        for (let x=0;x<=3;x++){
            cy.get('div[class="choose"] ul[class="nav nav-pills nav-justified"] a').eq(x).click()      
            cy.wait(1500)
            cy.get('#quantity').should('be.visible').clear().type("4")
            cy.get(':nth-child(5) > .btn').should('be.visible').click()
            cy.get('u').click()
            cy.wait(1000)

            cy.get('.nav > :nth-child(1) > a').should('be.visible').click() //Volvemos a home para seguir añadiendo productos
        }       
        
    });

    //Se pide ahora saber cuántos elementos hay //Usamos for each y for

    it.only('Each cuatro', () => {

        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)
        const datos=[];


        cy.get('div[class="choose"] ul[class="nav nav-pills nav-justified"] a').each(($el,index,$list)=>{
            datos[index]=$el.text()//En la variable datos, almacename los index y guardame los text

        }).then(()=>{

            for (let x=0;x<=datos.length;x++){ // la página solo soporta un máximo de 20, no de 34. Por tanto,
                //para que funcione debería cambiar datos.length por 20.
                cy.get('div[class="choose"] ul[class="nav nav-pills nav-justified"] a').eq(x).click()      
                cy.wait(200)
                cy.get('#quantity').should('be.visible').clear().type("4")
                cy.get(':nth-child(5) > .btn').should('be.visible').click()
                cy.get('u').click()
                cy.wait(200)

                cy.get('.nav > :nth-child(1) > a').should('be.visible').click() //Volvemos a home para seguir añadiendo productos
             }


        })
        //cy.log(datos) //Muestra: log Array[34]

               
        
    });


    
})
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

    it('Assert contain', () => {
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

    it('Assert have.text mas then', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').type("Pedro")

        cy.get("#userName").should("have.value","Pedro").then( (e) =>{ // Al usar have el valor comparado es igual a lo ingresado
            cy.get('#userEmail').should('be.visible').type("rodrigo@gmail.com")
            cy.get('#submit').should('be.visible').click()
        })               
      
    });

    it('Assert have.class', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').should('have.class','mr-sm-2').then( () =>{
            cy.get('#userName').type("rodrigo")
        })
    });

    it('Assert have.class y la funcion and', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').and('have.class','mr-sm-2').then( () =>{
            cy.get('#userName').type("rodrigo")
        })
    });

    it('Assert not have.class', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').and('not.have.class','mr-sm-22').then( () =>{
            cy.get('#userName').type("rodrigo")
        })
    });

    it('Assert length y css', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('div[class="rt-tbody"]>div[role="rowgroup"]>div[role="row"]').should("have.length",10) //Saber cuantos elementos (filas)hay en la tabla
        cy.get('div[class="rt-tbody"]>div[role="rowgroup"]>div[role="row"]>div[role="gridcell"]').should("have.length",70) //Saber cuantos elementos hay en la tabla (cada celda)
        
        cy.get('div[class="rt-tbody"]>div[role="rowgroup"]>div[role="row"]>div[role="gridcell"]').should("have.length",70).and('have.class','rt-td').and('have.css','width', '100px') //Se le añade la validacion de and have.class

        
    });

    it('Contains por inicio', () => {

        let tiempo=3000
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(tiempo)

        //Quitar ventana

        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.wait(tiempo)

        cy.get('.modal-footer > .btn').should('be.visible').click({force:true})

        cy.contains('.active > :nth-child(1) > .apis_list > .btn', 'APIs list for practice').should('be.visible').click({force:true})      

    });

    it.only('Reto asserts', () => {

        let tiempo=3000
        cy.visit("https://calculadorasonline.com/sumas-con-llevadas-online/")
        cy.title().should('eq','Sumas con llevadas online')
        cy.wait(tiempo)

        let a=5
        let b=6

        

        cy.get('#numb1').should('be.visible').and('have.class','number-input').type(a + '{enter}')
        cy.get('#numb1').should('be.visible').and('have.class','number-input').type(b)

        cy.contains('#butonum','Calcular').click()
        cy.wait(tiempo)
        
        //En mi ejercicio estamos tomando valores por separados, ya que la página los guarda como text por separado
        //Por tanto, solo tomo 2 números, entonces siempre debo sumar entre 2 digitos.
        cy.get('#svg1 > text:nth-child(9), #svg1 > text:nth-child(8)').should('be.visible').then ( (e) => {
            
            let r=a+b
            cy.log("El valor de r: " + r)
            const t1 = String(Cypress.$(e[0]).text().trim()); 
            const t2 = String(Cypress.$(e[1]).text().trim());
            let res = t2 + t1;
            cy.log("Valor res: " + res);
             
            

            if(r==res){
                cy.log("La suma es correcta: " + r + " = " + res)
            }else{
                cy.log("La suma es incorrecta: " + r + "  diferente a " + res)
            }
            cy.wait(tiempo)
            cy.get('#close-modal').click()
            cy.wait(tiempo)
            cy.get('#numb1').clear()
            cy.wait(tiempo)
            

            if (res>50){
                a=a-10 
                b=b-10

                cy.get('#numb1').should('be.visible').and('have.class','number-input').type(a + '{enter}')
                cy.get('#numb1').should('be.visible').and('have.class','number-input').type(b)

                cy.contains('#butonum','Calcular').click()
                cy.wait(tiempo)
            }else {
                a=a+5 
                b=b+5

                cy.get('#numb1').invoke("attr","style","color:blue") //Se agrega invoke para hacer cambios en el atributo, en este caso el color
                cy.get('#numb1').should('be.visible').and('have.class','number-input').type(a + '{enter}')
                cy.wait(tiempo)
                cy.get('#numb1').invoke("attr","style","color:red") //Se agrega invoke para hacer cambios en el atributo, en este caso el color
                cy.get('#numb1').should('be.visible').and('have.class','number-input').type(b)
                cy.wait(tiempo)

                cy.contains('#butonum','Calcular').click()
                cy.wait(tiempo)

            }
            
        })
        

    })




    

});
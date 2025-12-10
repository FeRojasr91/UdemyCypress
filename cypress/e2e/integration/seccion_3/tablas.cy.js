///<reference types="cypress" />

require ('cypress-xpath')
import 'cypress-file-upload'
require ('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Elementos de una tabla", () =>{
    it('Children', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)

        cy.get('.table-container').children('#productTable')
        cy.get('.table-container').children('#productTable').should("contain","Smartphone").click({force:true})
        cy.wait(tiempo)        


    });


    it('Seleccionar por medio de EQ', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)

        cy.get('[id="alertBtn"]').eq(0).should("contain","Simple Alert").click({force:true})       
        

    });

    it('Seleccionar por medio de filter', () => {
        let tiempo = 500
        cy.visit("https://automationexercise.com/")
        cy.title('eq','Automation Exercise')
        cy.wait(tiempo)

        cy.get('[type="button"]').filter(".btn.btn-success").should('contain','Test Cases')
        //En el filter las clases deben ir con un punto al principio y el espacio en blanco tambn lleva un punto
        //Muesta 6 casos, ya que hay 6 botones con el filter y a su vez, valida que tengamos en algunos en contain
        //Test Cases    
        
    });

    it('Seleccionar por medio de find', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)

        cy.get('.widget-content').find('#alertBtn').should('contain','Simple Alert').click()     
        
    });

    it('Seleccionar por medio de first y last', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)

        //en estos ejemplos esta solamente validando que estén, ya que, presiona en el centro de los objetos
        //si se ejecuta con más clases que tienen el mismo nombre ahí podría ir al primero o último.

        cy.get('.pagination').first().should('contain','1').click() 
        cy.wait(tiempo)

        //funcion last

        cy.get('.pagination').last().should('contain','4').click() 

        cy.wait(tiempo)

        //Acá de 21 elementos que tienen la clase, va al primero de todos

        cy.get('.widget-content').first()

        cy.wait(tiempo)

        //Acá de 21 elementos que tienen la clase, va al último de todos

        cy.get('.widget-content').last()

        //Podria agregar el find para seleccionar algun elemento y presionar en él




        
    });


    it('Seleccionar los elementos siguientes NextAll', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)
        
        cy.get('.widget-content').nextAll() //Muestra todo, excepto 3 que no están visibles
        cy.wait(tiempo)
      
    });

    it('Seleccionar al elemento padre ', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)
        
        cy.get('#alertBtn').parent().should('have.class','widget-content')       
      
    });

    it('Reto de las tablas', () => {
        let tiempo = 500
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title('eq','Automation Testing Practice')
        cy.wait(tiempo)

        cy.get('[id="alertBtn"]').eq(0).should('contain','Simple Alert').click() // Esto es aparte, solo para validar el boton.   

        cy.get('table[id="productTable"] input[type="checkbox"]').check()

        /******************Ejemplo de Udemy :
         for (let x=1;x<=4;x++)
           let nombreBoton=""
            if (x==1) {
                nombreBoton="Grees"           
            }
            else if (x==2){
                nombre Boton="Orange"            
            }
            else if (x==3){
                nombre Boton="Red"            
            }
            else if (x==4){
                nombre Boton="All"            
            }
            
            cy.get("[type='button']").eq(x).should('contain',nombreBoton).click({force.true})
            cy.wait(tiempo)
            cy.get("[type='checkbox'").check({force:true})
            cy.wait(tiempo)    

        *******************************/    
        
      
    });

    it('Mostrando los campos', () => {
        let tiempo = 500
        cy.visit("https://demoqa.com/webtables")
        cy.title('eq','DEMOQA')
        cy.wait(tiempo)

        const datos=[]   
          
        cy.get('div[class="rt-td"]').each(($el,index,$list)=>{
            datos[index]=$el.text().trim() // con el Trim eliminamos espacios y saltos de linea
        }).then(()=>{
            for(let i=0;i<datos.length;i++){
                if (datos[i] && datos[i] !== "") {//Se agrego este if para evitar que la tabla me mande datos vacios y mostrarlos en mi log
                    cy.log(datos[i])
                }
                //cy.log(datos[i])              
            }

        })    
    })

    it('Sumando los valores de los campos con la clase rt-td', () => {
        let tiempo = 500
        cy.visit("https://demoqa.com/webtables")
        cy.title('eq','DEMOQA')
        cy.wait(tiempo)

        const datos=[]
        let cantidadRttd=0   
          
        cy.get('div[class="rt-td"]').each(($el,index,$list)=>{
            datos[index]=$el.text().trim() // con el Trim eliminamos espacios y saltos de linea
        }).then(()=>{
            for(let i=0;i<datos.length;i++){              

                if(Number(datos[i])){ //Con esto sumaremos la cantidad de nuestra variable number, en este caso los de edad o age
                        cantidadRttd+=Number(datos[i])
                }                             
            }
            cy.log("La cantidad total es: "+ cantidadRttd)
            expect(cantidadRttd).to.eq(24113)

            //Esto al final me trae todos lo numerico, suma edad y salario.
        })    
    })

    //A continuacion se genera otro test que solo me suma la edad:

    it('Sumando los valores de los campos con la clase rt-td', () => {
        let tiempo = 500
        cy.visit("https://demoqa.com/webtables")
        cy.title('eq','DEMOQA')
        cy.wait(tiempo)

        let sumaEdad = 0
        
        cy.get('div.rt-td').each(($el, index) => {
            const texto = $el.text().trim()

            // Edad = columna 3 → índice % 7 === 2
            if (index % 7 === 2) {
                const valor = Number(texto)
                if (!isNaN(valor)) {
                    sumaEdad += valor
                }
            }
        }).then(() => {
            cy.log("Suma de edades: " + sumaEdad)
            // valor esperado según la tabla original
            expect(sumaEdad).to.eq(113)   // 39 + 45 + 29 = 113 (según versiones)
        })    
    })

    it.only('Obtener el valor de la edad en tabla a partir de otro campo de la tabla', () => {
        let tiempo = 500
        cy.visit("https://demoqa.com/webtables")
        cy.title('eq','DEMOQA')
        cy.wait(tiempo)

        const campo=cy.get("#app > div > div > div > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(1)")

        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            cy.log(dato)

            if(dato.includes("Alden")){
                campo.eq(index).next().next().then((age)=>{
                    const Edad=age.text()
                    cy.log(Edad)
                    cy.log("La edad de Alden es: " + Edad)
                    expect(Edad).to.equal("45")
                })
            }

        })      


    })




    


    
})
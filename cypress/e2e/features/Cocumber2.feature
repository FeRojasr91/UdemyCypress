Feature: Demo de Cocumber Dos

    Esto es una demo de como utilizar Cocumber

    #Scenario: Demo de Cocumber Dos
    #     Given Abrir el navegador principal
    #     When Cargando el nombre rodrigo
    #     When Cargando el email rod@email.com
    #     When Cargando la Dirección "Demo direccion uno"
    #     When Cargando la Dirección dos "Demo direccion dos"
    #     When Click en Button
    #     Then Validar el nombre de la Página
    
    Scenario Outline: Scenario Outline name: Demo de Cocumber
         Given Abrir el navegador principal
         When Cargando el nombre <username>
         When Cargando el email <email>
         When Cargando la Dirección "<dir1>"
         When Cargando la Dirección dos "<dir2>"
         When Click en Button
         Then Validar el nombre de la Página

         Examples:
             | username | email | dir1 | dir2 |
             | rodrigo  | rod@email.com  | direc1  | direc2 |
             | juan  | jua@email.com  | direc1  | direc2 |
             | pedro  | ped@email.com  | direc1  | direc2 |
             | erika  | erika@email.com  | direc1  | direc2 |


    
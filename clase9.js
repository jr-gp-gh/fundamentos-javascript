var x = 4, y ='4'

//Compara los dos valores pero sin importar el tipo ya que los lleva aun solo tipo cadena
//Resultado true
x == y

//Compara los dos valores pero toma en cuenta los tipos
//Resultado false
x === y

//Se recomienda el triple ====

//Cuando se compara objetos es diferente
var sacha = {
    nombre: 'Sacha'
}

var otraPersona = {
    nombre: 'Sacha'
}

var otraSacha = sacha

var otraPersonaSacha = {
    ...sacha
}

//Resultado es falso
sacha == otraPersona
sacha === otraPersona

//Resultado es verdadero
sacha == otraSacha
sacha === otraSacha

//Resultado es falso
sacha == otraPersonaSacha
sacha === otraPersonaSacha

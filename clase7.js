var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszync',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}


function imprimirNombreEnMayusculas(persona)
{
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona) 
{
    //Hola, me llamo ... y tengo 28 años
    console.log(`Hola, me llamo ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`)
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

imprimirNombreYEdad(sacha) 
imprimirNombreYEdad(dario) 

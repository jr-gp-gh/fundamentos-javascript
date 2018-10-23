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

// function imprimirNombreEnMayusculas(persona)
// {
//     console.log(persona.nombre.toUpperCase())
// }

function imprimirNombreEnMayusculas({ nombre })
{
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: 'Gomez' })
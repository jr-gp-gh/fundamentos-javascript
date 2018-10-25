var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszync',
    edad: 28
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 15
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona)
// const esMayorDeEdad = persona =>
// {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona)
{
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else {
        console.log(`${persona.nombre} es menor de edad`)
    }

}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona))
    {
        console.log('Acceso Denegado')
    }
}

function imprimirSiEsMenorDeEdad(persona)
{
    if (!esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es menor de edad`)
    }
    else {
        console.log(`${persona.nombre} es mayor de edad`)
    }

}

imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMenorDeEdad(sacha)
permitirAcceso(sacha)
imprimirSiEsMayorDeEdad(juan)
imprimirSiEsMenorDeEdad(juan)
permitirAcceso(juan)


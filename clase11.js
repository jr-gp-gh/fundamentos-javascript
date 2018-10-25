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

function esMayorDeEdad(persona)
{
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona)
{
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else {
        console.log(`${persona.nombre} es menor de edad`)
    }

}
imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(juan)
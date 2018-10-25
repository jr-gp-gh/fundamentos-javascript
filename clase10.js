var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszync',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}


function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    
    if (persona.ingeniero) {
        console.log(`Ingeniero`)
    }
    if (persona.cocinero) {
        console.log(`Cocinero`)
    }
    if (persona.cantante) {
        console.log(`Cantante`)
    }
    if (persona.dj) {
        console.log(`Dj`)
    }
    if (persona.guitarrista) {
        console.log(`Guitarrista`)
    }
    if (persona.drone) {
        console.log(`Drone`)
    }
}

imprimirProfesiones(sacha)

function imprimirSiEsMayorDeEdad(persona)
{
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`)
    }

}

imprimirSiEsMayorDeEdad(sacha)
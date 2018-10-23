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

// function cumpleanos(persona) 
// {
//     persona.edad += 1
// }

// function cumpleanos(edad) 
// {
//     edad += 1
// }

function cumpleanos(persona) 
{
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

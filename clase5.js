var nombre = 'Sacha'

function imprimirNombreEnMayusculas(nombre)
{
    //window.nombre variable global
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)
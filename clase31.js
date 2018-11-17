const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    //console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
 
    // $.get(url, opts, callback).fail(function() {
    //     console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    // })

    $
    .get(url, opts, callback)
    .fail(() => {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })

}

//Se piden en serie no en paralelo
obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function(personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)
                    })
                })
            })
        })
    })
})
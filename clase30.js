const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    //console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
 
    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback) {
            callback()
        }
    }) 
}

//De esta manera tampoco hay control
// obtenerPersonaje(1, obtenerPersonaje(2))

//Se piden en serie no en paralelo
obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function() {
                    obtenerPersonaje(6)
                })
            })
        })
    })
})
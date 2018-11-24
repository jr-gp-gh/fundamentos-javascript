const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, function (data){
            resolve(data) //resolver la promesa
        })
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

//Se hacen en serie
obtenerPersonaje(1)
    .then(personje => {
        console.log(`El personaje 1 es ${personje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personje => {
        console.log(`El personaje 2 es ${personje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personje => {
        console.log(`El personaje 3 es ${personje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personje => {
        console.log(`El personaje 4 es ${personje.name}`)
        return obtenerPersonaje(5)
    })
    .then(personje => {
        console.log(`El personaje 5 es ${personje.name}`)
        return obtenerPersonaje(6)
    })
    .then(personje => {
        console.log(`El personaje 6 es ${personje.name}`)
    })
    .catch(onError) //El catch es el mismo paratodos

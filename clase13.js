var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszync',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.20

const aumentarDePeso = (persona, incremento) => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = (persona, incremento) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++) {
    var random = Math.random()
    if (random < 0.25) {
        //aumentarDePeso
        aumentarDePeso(sacha)
    }
    else if (random  < 0.5) {
        //adelgazarDePeso
        adelgazarDePeso(sacha)
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)


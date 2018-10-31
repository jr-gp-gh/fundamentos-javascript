var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszync',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona, incremento) => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = (persona, incremento) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3

var dias = 0

while (sacha.peso > META) {
    //debugger
    if (comeMucho()) {
        aumentarDePeso(sacha)
    }
    if (realizaDeporte()) {
        adelgazarDePeso(sacha)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3kg`)


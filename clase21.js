// function Persona() {
//     console.log('Me ejecutaron')
// }

// var sacha = new Persona()

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    // return this
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    if (this.altura >= 1.8){
        console.log(`Soy Alto`)
    } else {
        console.log(`No soy Alto`)
    } 
}

var sacha = new Persona('Sacha', 'Lifszync', 1.80)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.86)

sacha.saludar()
sacha.soyAlto()
erika.saludar()
erika.soyAlto()
arturo.saludar()
arturo.soyAlto()
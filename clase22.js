function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
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

sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()
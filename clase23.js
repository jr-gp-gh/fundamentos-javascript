function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

// //This esta en el contexto windows
// Persona.prototype.soyAlto = () => {
//     debugger   
//     return this.altura >= 1.8
// }

Persona.prototype.soyAlto = function() {
    // debugger   
    return this.altura >= 1.8
}

var sacha = new Persona('Sacha', 'Lifszync', 1.80)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.86)

sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()
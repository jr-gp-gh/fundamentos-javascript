var signo = prompt('¿Cuál es tu signo?')

console.log(signo)

// if (signo === 'acuario') {
//     console.log('ACUARIO --')
// }

// if (signo === 'piscis') {
//     console.log('PISCIS --')
// }

switch (signo){
    case 'acuario':
        console.log('ACUARIO --')
        break
    case 'piscis':
        console.log('PISCIS --')
        break
    case 'leo':
        console.log('LEO --')
        break
    case 'tauro':
        console.log('TAURO --')
        break
    case 'cáncer':
    case 'cancer':
        console.log('CANCER --')
        break
    default:
        console.log('No es un signo válido')
        break
}

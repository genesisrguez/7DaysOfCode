// Comparación entre número y cadena
// El operador === compara tanto el valor como el tipo de dato.
// En este caso, aunque el valor de numeroUno y stringUno sea el mismo (1), 
// sus tipos son diferentes (number y string), por lo que la comparación siempre será falsa.

// Declaración de variables para comparar números y cadenas
let numeroUno = 1
let stringUno = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

// Comparación entre número y cadena
if (numeroUno === stringUno) {
    console.log('Las variables numeroUno y stringUno tienen el mismo valor, pero diferentes tipos');
} else {
  console.log('Como variables numeroUno y stringUno no tienen el mismo valor');
}

if (numeroTreinta === stringTreinta) {
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor, pero diferentes tipos');
} else {
  console.log('Como variables numeroTreinta y stringTreinta no tienen el mismo valor');
}

if (numeroDiez === stringDiez) {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero diferentes tipos');
} else {
  console.log('Como variables numeroDiez y stringDiez no tienen el mismo valor');
}


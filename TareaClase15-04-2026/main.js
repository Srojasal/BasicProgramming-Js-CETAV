// ! Ejercicio 1

// Utilice loops para calcular la suma de cada digito de un número
// Por ejemplo: Para el número 364, la suma sería 3+6+4 = 13
// Otro ejemplo: Para el número 1252, la suma sería 1+2+5+2 = 10;

// INPUT
// El input es un número positivo (mayor que 0)
const number = 1587;

// OUTPUT
let sum = 0;
// El output es la suma de cada dígito de number
let numbertoString = number.toString();



    for (let indice = 0; indice < numbertoString.length; indice++) {
    //ParseInt convierte el string a un numero entero, para que se pueda sumar
    //Aquí sumo cada dígito del número a la variable sum
    //El [indice] me permite acceder a cada dígito del número, ya que al convertirlo a string, cada dígito es un caracter del string
        sum = sum + parseInt(numbertoString[indice]);
}

console.log(`La suma de los dígitos del número ${number} es ${sum}`);





// !  Ejercicio 2 - PUNTOS EXTRA!
// Utilice loops y condicionales para calcular la cantidad de vocales de una palabra
// Se espera el calculo de todas las vocales de la palabra y también la cantidad de vocales únicas
// Por ejemplo: Para la palabra casa, la cantidad de vocales es 2 y la cantidad de vocales únicas es 1
// Otro ejemplo: Para la palabra murciélago, la cantidad de vocales es 5 y la cantidad de vocales únicas es 5

// INPUT
// El input es un string cualquiera
const word = "zapato";

let totalAmount = 0;
let uniqueVowels = "";

for (let index = 0; index < word.length; index++) {
    let letter = word[index].toLowerCase();

    if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
    ) {
        totalAmount++;

        if (uniqueVowels.indexOf(letter) === -1) {
            uniqueVowels += letter;
        }
    }
}

let uniqueAmount = uniqueVowels.length;

console.log(`La palabra ${word} tiene ${totalAmount} vocales totales y ${uniqueAmount} vocales únicas`);
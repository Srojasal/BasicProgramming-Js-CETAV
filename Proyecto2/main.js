// Para un supermercado con 1 cajero, codifique un programa 
// que calcule cuánto tiempo le va a tomar a este cajero atender 
// una fila de x cantidad de compradores 

// Input es un número entre 0 y 90


//  Reglas
// - Estas reglas aplican para todos los clientes:
//     * Los clientes pares toman su propio numero en minutos + 45 segundos
//     * Los clientes impares toman 20 segundos
// - Estas reglas aplican como un extra sobre las reglas anteriores:
//     * Los clientes múltiplos de 10 toman 18 minutos y 11 segundos más
//     * Los clientes múltiplos de 5 toman 37 minutos más
// - Ejemplo: Para el cliente 20 aplica la regla par (20m45s) + la regla multiplo de 10 (18m11s)
// por lo que el cliente 20 toma en total 38 minutos y 56 segundos 


// Output Logs
// Si al cajero le toma menos de 60 segundos:
// "A el cajero le va a tomar 48 segundos"
//  Si al cajero le toma más de 60 segundos:
// "A el cajero le va a tomar 3 minutos y 48 segundos"
//  Si al cajero le va a tomar más de 60 minutos:
// "A el cajero le va a tomar 1 hora, 22 minutos y 3 segundos"

// Documentación
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Ejemplos:

// Si la cantidad de clientes es 1
// "A el cajero le va a tomar 20 segundos"

// Si  la cantidad de clientes es 5
// "A el cajero le va a tomar 45 minutos y 30 segundos'"

// Si la cantidad de clientes es 25
//"A el cajero le va a tomar 5 horas, 54 minutos y 20 segundos"



const cantidadDeClientes = 30;

let totalSegundos = 0;
let indice = 1;

while (indice <= cantidadDeClientes){

    if (indice % 2 === 0){
        totalSegundos += (indice * 60) + 45;
    //Ejemplo: cliente 4 --> (4 x 60) + 45 = 285 segundos
    //240 + 45 segundos = 285 
    } else {
        totalSegundos += 20;
    }
    // ! extras
    // Los clientes múltiplos de 10 toman 18 minutos y 11 segundos más
        if (indice % 10 === 0){
            totalSegundos += (18 * 60) + 11;
        } else if (indice % 5 === 0) {
            totalSegundos += (37 * 60);

        // Es par --> 20 minutos y 45 segundos
        // Es multiplo de 10 --> 18 minutos y 11 segundos
        // ! Total 38 minutos y 56 segundos 

        }
        indice = indice + 1;

    let horas = 0;
    let minutos = 0;
    let segundos = totalSegundos;

    //sacar horas

    // ! Cada 3600 segundos son 1 hora, como fisica matemática, es una regla
    while (segundos >= 3600){
        segundos -= 3600;
        horas += 1;
    }   

    //sacar minutos 
    while (segundos >= 60){
        segundos -= 60;
        minutos += 1;
    }

    // Output logs
    let resultado = "A el cajero le va a tomar ";

    if (horas > 0){
        resultado += horas + " hora, ";
    }

    if (minutos > 0){
        resultado += minutos + " minutos y ";

    }

    resultado += segundos + " segundos";

    console.log(resultado);



//cliente 10,20,30,40...
//se le agrega 18 minutos y 11 segundos         

//es lo mismo += 
//totalSegundos = totalSegundos + 20  





}
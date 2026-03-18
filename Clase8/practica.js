// 1. definir una variable iteraciones con el mumero 100
// 2. Escribir un loop que itere 100 veces (usando la variable iteraciones)
// 3. en el loop usando la variable iteraciones:
    // -Si el numero es multiplo de 3, loggeamos:
    // El numero x es multiplo de 3
    // -Si el numero es multiplo de 5 
    // En numero x es multiplo de 5
    // -Si el numero es multiplo de ambos 3 y 5, loggeamos 
    // (x es la variable iteraciones)
    // (solo se ejecuta un log por numero)
    // -le restamos 1 a variable iteraciones



let iteraciones = 100
while (iteraciones > 0){
    if (iteraciones % 3 === 0 && iteraciones % 5 === 0) {
        console.log("El numero " + iteraciones + " es multiplo de 3 y 5");
    } else if (iteraciones % 3 === 0) {
        console.log("El numero " + iteraciones + " es multiplo de 3");
    } else if (iteraciones % 5 === 0) {
        console.log("El numero " + iteraciones + " es multiplo de 5");
    }

iteraciones = iteraciones - 1;

}

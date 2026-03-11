// && AND
// || OR
// ! NOT

const expresion1 = 5 > 20;
console.log('expresion1', expresion1); 

const expresion2 = 3 < 10;
console.log('expresion2', expresion2);

const expresion3 = 2 == 2;
console.log('expresion3', expresion3);

const expresion4 = 3 != 3;
console.log('expresion4', expresion4);

//True && True 

console.log('TRUE&&TRUE', expresion2 && expresion3);

// FALSE && TRUE
console.log('FALSE&&TRUE', expresion1 && expresion3);

//FALSE && FALSE
console.log('FALSE&&FALSE', expresion4 && expresion1);

//+ Y - ES MENOS
//+ Y + ES MAS 
// - Y - ES MAS
// - Y + ES MENOS

//TRUE && FALSE
console.log('TRUE&&FALSE', expresion2 && expresion4);
//TRUE || FALSE
console.log('TRUE||FALSE', expresion2 || expresion4);
//FALSE || FALSE
console.log('FALSE||FALSE', expresion1 || expresion4);
//FALSE || TRUE
console.log('FALSE||TRUE', expresion1 || expresion3);


// aqui si pasa lo contrario, es decir, si es falso, entonces se vuelve verdadero
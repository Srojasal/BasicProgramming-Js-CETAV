//escribir un programa que nos diga si podemos conducir o no

const age = 40; //numero entre 0-100
const hasLicense = true; //Boolean true - false
const conditions = age >= 18 && hasLicense == true;
function answerYes() { console.log('Puedes conducir') }

// usando operadores logicos, llame la funcion answerYes cuando la persona es mayor de 18 y si tiene licencia ejecutamos console.log('Puedes conducir'), sin estructura de control, es decir, sin if, switch, etc


// (age >= 18 && hasLicense) && answerYes();
// (age >= 18 && !hasLicense) && console.log('No puedes conducir, no tienes licencia');
// (age < 18) && console.log('No puedes conducir, eres menor de edad');
// (age < 18 && hasLicense) && console.log('no hay posibilidad de que tengas licencia');

conditions && answerYes();




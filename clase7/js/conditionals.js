

// if ((5 === 5 && 4 < 10) || 3 != 7) {
//     console.log('La condicion es verdadera');

// } else {

//     console.log('La condicion es false');

// }



//! practica: creemos estas variables
const userName = 'User0001'; //cualquier string
const userPassword = '1234'; //cualquier string
const savedPassword = '1234'; //NO CAMBIA
const userAnswer = 'calabaza'; //Cualquier string
const savedAnswer = 'Pistacho'; //NO CAMBIA

//1. Si el userName no es user0001
// -> su username no existe 
//2. Si el userName si es user0001 y el password hace match
// -> puede iniciar sesion
//3. Si los passwords NO hacen match, pero los answer SI hacen match
// -> puede iniciar sesion
//4. Si nada hace match (password ni answer)
// -> no puede iniciar sesion

if (userName != 'User0001') {
    console.log('Su username no existe');
} else if ((userName == 'User0001') && (userPassword == savedPassword)) {
    console.log('Puede iniciar sesion');
} else if ((userPassword != savedPassword) && (userAnswer == savedAnswer)) {
    console.log('Puede iniciar sesion');
} else {
    console.log('No puede iniciar sesion');
}

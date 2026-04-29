const list = ['Miguel', 98, 'Luis', 69, 'Isabel', 77];

// Variables para calcular el promedio 
let suma = 0; //Guarda la suma total de notas 
let cantidadEstudiantes = 0; //Guarda la cantidad de estudiantes

//listas para clasificar estudiantes

let aprobados = []; //nombres con nota >= 70
let reprobados = []; // nombres con nota < 70


//creamos una nueva lista con solo letras en vez de numeros, como clasificar las notas en letras

let resultado = [];

//recorremos la lista de 2 en 2 para obtener el nombre y la nota de cada estudiante
for (let index = 0; index < list.length; index += 2){
    const alumno = list[index]; //con esto, obtenemos el nombre del estudiante
    let score = list[index + 1];  // con esto, obtenemos la nota del estudiante

    // calculamos para el promedio

    suma += score; // sumamos la nota a la variable suma
    cantidadEstudiantes++; // aumentamos la cantidad de estudiantes en 1 

    //con esto se clasifica los estudiantes con un if si aprueban o no aprueban
    if (score >= 70){
        aprobados.push(alumno); //el push empuja el nombre del estudiante a la lista de aprobados
    }
    else {
        reprobados.push(alumno); // el push empuja el nombre del estudiante a la lista de reprobados
    }

    let letra; // variable para guardar la letra correspondiente a la nota

    //Clasificar la nota en letras
    if (score >= 95){
        letra = 'A';
    } else if (score >= 90){
        letra = 'B';
    } else if (score >= 80){
        letra = 'C';
    } else if (score >= 70){
        letra = 'D';
    } else {
        letra = 'F';
    }

    //agregar a la nueva lista: nombre + letra. Ejemplo: "Ana: A"
    resultado.push(alumno); // agrego el nombre a la nueva lista
    resultado.push(letra); // agrego la letra a la nueva lista

    //outpu en el cual se imprime el resultado individual
    console.log(`La calificacion de ${alumno} es ${letra}`);

}

// calculo del promedio y redondear a 2 decimales 

let promedio = suma / cantidadEstudiantes; // calcula el promedio dividiendo la suma de las notas entre la cantidad de estudiantes

//redondea a 2 decimales usando EPSILON para evitar problemas con precision

promedio = Math.round((promedio + Number.EPSILON) * 100) / 100; 

//log para imprimir los resultados finales
console.log (`El promedio de las calificaciones es: ${promedio}`);
console.log(`Los estudiantes que aprobaron son: ${aprobados.join(', ')}`); //join para unir los nombres de los estudiantes con una coma y espacio
console.log(`Los estudiantes que reprobaron son: ${reprobados.join(', ')}`);
console.log('La lista transformada es:', resultado); //imprime la lista transformada con nombre y letra
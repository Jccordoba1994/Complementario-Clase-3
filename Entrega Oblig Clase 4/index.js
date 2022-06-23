let nombre = prompt ("¿Como es tu nombre?");
let sexualidad =  prompt ("Ingrese su Sexo: M (Masculino), F (Femenino) o NB (No binario)");

/* while (sexualidad === "M", "m", "F", "f", "NB", "Nb", "nb") {
switch (sexualidad) {
    case ("M", "m"):
        alert ("Bienvenido " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
        break;
    case ("F", "m"):
        alert ("Bienvenida " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
        break;
    case ("NB", "Nb", "nb") :
        alert ("Bienvenide " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
        break;
}
} */

if (sexualidad === "M") {
    alert ("Bienvenido " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
} else if (sexualidad === "F") {
    alert ("Bienvenida " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
} else {
    alert ("Bienvenide " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
}

let numero = parseInt (prompt ("ingrese cantidad de alumnos"));

const precioPersonalizado = 5000;
const precioDosPersonas = 9000;
const preciosTresPersonas = 12000;
const precioGrupal = 3500;

const dosPersonas = 2;
const tresPersonas = 3;
const grupal = 4; 


if (numero === 1) {
    alert ("El entrenamiento personalizado cuesta: " + precioPersonalizado + " al mes, entrenando dos veces a la semana.");
} else if (numero === 2) {
    alert ("El entrenamiento en pareja cuesta: " + (precioDosPersonas / dosPersonas) + " por persona, al mes, entrenando dos veces a la semana.");
} else if (numero === 3) {
    alert ("El entrenamiento de a tres cuesta: " + (preciosTresPersonas / tresPersonas) + " por persona, al mes, entrenando dos veces a la semana.");
} else {
    alert ("El entrenamiento grupal cuesta: " + (precioGrupal) + " por persona, al mes, entrenando dos veces a la semana.");
}

let consulta = prompt ("¿Le interesa otra cotización? (SI / NO)")

if (consulta === "Si", "SI", "si") {
    let numero = parseInt (prompt ("ingrese cantidad de alumnos"));
} else {
    alert ("Muchas gracias por visitarnos, estamos a tu disposición");
}





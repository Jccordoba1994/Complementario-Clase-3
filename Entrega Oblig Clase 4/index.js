let nombre = prompt ("¿Como es tu nombre?");
let sexualidad =  prompt ("Ingrese su Sexo: M (Masculino), F (Femenino) o NB (No binario)").toLocaleLowerCase;

if (sexualidad == "m") {
    alert ("Bienvenido " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
} else if (sexualidad == "f") {
    alert ("Bienvenida " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
} else {
    alert ("Bienvenide " + nombre + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
}

let numero = parseInt (prompt ("ingrese cantidad de alumnos"));

const precioPersonalizado = 5000;
const precioDosPersonas = 9000;
const preciosTresPersonas = 12000;
const precioGrupal = 3500;

function cotización(numero) {
    if (numero == 1) {
        return (alert ("El entrenamiento personalizado cuesta: " + precioPersonalizado + " al mes, entrenando dos veces a la semana."));
    } else if (numero == 2) {
        return (alert ("El entrenamiento en pareja cuesta: " + (precioDosPersonas / numero) + " por persona, al mes, entrenando dos veces a la semana."));
    } else if (numero == 3) {
        return (alert ("El entrenamiento de a tres cuesta: " + (preciosTresPersonas / numero) + " por persona, al mes, entrenando dos veces a la semana."));
    } else {
        return (alert ("El entrenamiento grupal cuesta: " + (precioGrupal) + " por persona, al mes, entrenando dos veces a la semana."));
    }
}
cotización (numero);

let consulta = prompt ("¿Le interesa otra cotización? (SI / NO)").toLocaleLowerCase ();

function dudas (consulta) {
    if (consulta == "si") {
        numero = parseInt (prompt ("ingrese cantidad de alumnos"));
        cotización (numero);
        consulta = prompt ("¿Le interesa otra cotización? (SI / NO)")
        dudas (consulta);
    } else {
        let reconsulta = prompt ("¿Alguna otra consulta? (SI / NO)").toLowerCase();

        if (reconsulta == "si") {
            let  = parseInt (prompt ("Ingrese su consulta y nos contactaremos a la brevedad."));
            alert ("Muchas gracias por visitarnos, estamos a tu disposición");
        } else {
            alert ("Muchas gracias por visitarnos, estamos a tu disposición");
        }
    } 
}
dudas (consulta);





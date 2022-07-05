// Ingreso consultas
let Usuario = prompt ("Ingrese nombre de usuario");

while (!Usuario) { 
    Usuario = prompt ("No ingreso un nombre valido, intente nuevamente")
}


do {
    sexualidad =  prompt ("Ingrese su Sexo: M (Masculino), F (Femenino) o NB (No binario)").toLowerCase();

} while (sexualidad !== "m" && sexualidad !== "f" && sexualidad !== "nb") {
    if (sexualidad == "m") {
        alert ("Bienvenido " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
    } else if (sexualidad == "f") {
        alert ("Bienvenida " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
    } else if (sexualidad == "nb") {
        alert ("Bienvenide " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
    } else {
        alert ("No ingreso una opcion válida, intente nuevamente");
    }
}  

/* function sexualidad (Usuario) {
    if (sexualidad == "m") {
        alert ("Bienvenido " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
    } else if (sexualidad == "f") {
        alert ("Bienvenida " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
    } else if (sexualidad == "nb") {
        alert ("Bienvenide " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
    } else {
        alert ("No ingreso una opcion válida, intente nuevamente");
    }
} */


class Clientes {
    constructor (nombre, apellido, edad, teléfono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = teléfono;
    }
}

function registroClientes() {
    let cliente = [] ;
    for (let i = 0; i < 100 ; i++) {
        let nombre = promp ("Ingrese su nombre");
        let apellido = prompt ("Ahora su apellido");
        let edad = parseInt (prompt("Tu edad"));
        let telefono = parseInt (prompt("Un teléfono por favor"));
        let clientes = (new Clientes (nombre, apellido, edad, telefono));
        cliente.push(clientes);
    }
    return cliente;
}

function registroClientes(cliente) {
    for (const Clientes of cliente) {
        console.log(Clientes);
        alert (`Muchas gracias por elegirnos ${clientes.nombre}`)
    }
    
}

function guardar() {
    let cliente = registroClientes ();
    registroClientes (cliente);
    
}

let numero = parseInt (prompt ("ingrese cantidad de alumnos"));

const precios = [
    Personalizado = 5000,
    DosPersonas = 9000,
    TresPersonas = 12000,
    Grupal = 3500,
]

function cotización(numero) {
    if (numero == 1) {
        return (alert ("El entrenamiento personalizado cuesta: " + Personalizado + " al mes, entrenando dos veces a la semana."));
    } else if (numero == 2) {
        return (alert ("El entrenamiento en pareja cuesta: " + (DosPersonas / numero) + " por persona, al mes, entrenando dos veces a la semana."));
    } else if (numero == 3) {
        return (alert ("El entrenamiento de a tres cuesta: " + (TresPersonas / numero) + " por persona, al mes, entrenando dos veces a la semana."));
    } else {
        return (alert ("El entrenamiento grupal cuesta: " + (Grupal) + " por persona, al mes, entrenando dos veces a la semana."));
    }
}
cotización (numero);

let consulta = prompt ("¿Le interesa otra cotización? (SI / NO)").toLowerCase();

function dudas (consulta) {
    if (consulta == "si") {
        numero = parseInt (prompt ("ingrese cantidad de alumnos"));
        cotización (numero);
        consulta = prompt ("¿Le interesa otra cotización? (SI / NO)")
        dudas (consulta);
    } else {
        let reconsulta = prompt ("¿Alguna otra consulta? (SI / NO)").toLowerCase();

        if (reconsulta == "si") {
            let  = parseInt (prompt ("Ingrese su consulta"));
            alert ("Muchas gracias por visitarnos, estamos a tu disposición");
        } else {
            alert ("Muchas gracias por visitarnos, estamos a tu disposición");
        }
    } 
}
dudas (consulta);
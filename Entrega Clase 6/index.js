// Ingreso consultas
let Usuario = prompt ("Ingrese nombre de usuario");

while (!Usuario) { 
    Usuario = prompt ("No ingreso un nombre valido, intente nuevamente")
}

let sexualidad =  prompt ("Ingrese su Sexo: M (Masculino), F (Femenino) o NB (No binario)").toLowerCase();

while (sexualidad !== "m" && sexualidad !== "f" && sexualidad !== "nb") {
    sexualidad = prompt ("No ingreso una letra válida, intente nuevamente: ")
}

if (sexualidad == "m") {
    alert ("Bienvenido " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
} else if (sexualidad == "f") {
    alert ("Bienvenida " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
} else {
    alert ("Bienvenide " + Usuario + " a AT sports Training, acontinuación cotizaremos tu entrenamiento");
}


class Clientes {
    constructor (nombre, apellido, edad, teléfono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = teléfono;
    }
}

let numero = parseInt (prompt ("ingrese cantidad de alumnos"));

function registroClientes() {
    let cliente = [] ;
    for (let i = 0; i < numero ; i++) {
        let nombre = prompt ("Ingrese su nombre");
        let apellido = prompt ("Ahora su apellido");
        let edad = parseInt (prompt("Tu edad"));
        let telefono = parseInt (prompt("Un teléfono por favor"));

        let datos = (new Clientes (nombre, apellido, edad, telefono));
        cliente.push(datos);
    }
}
registroClientes ();
alert (`Muchas gracias por elegirnos ${Clientes.nombre}`)

function registro(cliente) {
    for (const Clientes of cliente) {
        console.log(Clientes);
    }
}

function guardar() {
    let cliente = registro ();
    registro (cliente);
    
}

class tipoPrecio {
    constructor(tipo, precio) {
        this.tipo = tipo;
        this.precio = precio;
    }
}

const precios = [];
precios.push (new tipoPrecio('Personalizado', 5000));
precios.push (new tipoPrecio('Dos personas', 9000));
precios.push (new tipoPrecio('Tres personas', 12000));
precios.push (new tipoPrecio('Grupal', 3500));

for (const tipoPrecio of precios) {
    console.log(tipoPrecio);
}

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
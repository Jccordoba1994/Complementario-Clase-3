
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validacion);

function validacion(e) {
    e.preventDefault();

    let form = e.target;
    let input1 = form.children[0].value;
    let input2 = form.children[1].value;
    let input3 = form.children[2].value;
    let input4 = form.children[3].value;

    console.log(input1, input2, input3, input4);
}

let productos = [
    {id: 1, nombre: "personzalido", precio: 5000},
    {id: 2, nombre: "dos personas", precio: 4500},
    {id: 3, nombre: "tres personas", precio: 4000},
    {id: 4, nombre: "gruapl", precio: 3500},
];

let container = document.getElementById("container");
let clase = prompt ("¿Su entrenamiento sera? Personalizado, Dos personas, Tres personas o grupal (4 o + personas)").toLowerCase ();

while (clase !== "personalizado" && clase !== "dos personas" && clase !== "tres personas" && clase !== "grupal"){
    clase = prompt ("No ingreso un texto valido, intente nuevamente, Personalizado, Dos personas, Tres personas o grupal (4 o + personas): ").toLowerCase();
}

let filtrados = productos.filter(elemento => elemento.nombre == clase);

for(const producto of filtrados){
    let item = document.createElement("div");
    item.innerHTML =    `<h2>Id: ${producto.id}</h2> 
                        <p>Producto: ${producto.nombre}</p>
                        <b>Precio: ${producto.precio}</b>`;

container.append(item);
}

let consulta = prompt ("¿Le interesa otra cotización? (SI / NO)").toLowerCase();

function dudas (consulta) {
    if (consulta == "si") {
        clase = prompt ("¿Su entrenamiento sera? Personalizado, Dos personas, Tres personas o grupal (4 o + personas)").toLowerCase ();
        
        while (clase !== "personalizado" && clase !== "dos personas" && clase !== "tres personas" && clase !== "grupal") {
            clase = prompt ("No ingreso un texto valido, intente nuevamente, Personalizado, Dos personas, Tres personas o grupal (4 o + personas): ")
        }
        let filtrados = productos.filter(elemento => elemento.nombre == clase);
        // cotizacion (clase);
        consulta = prompt ("¿Le interesa otra cotización? (SI / NO)")
        dudas (consulta);
    } else {
        let reconsulta = prompt ("¿Alguna otra consulta? (SI / NO)").toLowerCase();

        if (reconsulta == "si") {
            let  = parseInt (prompt ("Ingrese su consulta"));
            alert ("Muchas gracias por visitarnos, Familia AT Sports");
        } else {
            alert ("Muchas gracias por visitarnos, Familia AT Sports");
        }
    } 
}
dudas (consulta);
// Ejemplo turnos castración

let numero = parseInt (prompt ("ingrese un número del 1 al 10"));

while (numero != "0") {
    switch (numero) {
        case "1":
            alert ("Hacer las compras");
            break;
        case "2":
            alert ("Cocinar");
            break;
        case "3":
            alert ("Lavar ropa");
            break;
        case "4":
            alert ("Lavar platos");
            break;
        case "5":
            alert ("Cocinar");
            break;
        case "6":
            alert ("Bañar mascotas");
            break;
        case "7":
            alert ("Limpiar dormitorios");
            break;
        case "8":
            alert ("Limpiar baño y cocina");
            break;
        case "9":
            alert ("Lavar ropa");
            break;
        case "9":
            alert ("Lavar auto");
            break;
        default:
            alert ("Solo números del 1 al 10!")
            break;
    }
    numero = prompt ("ingrese un número del 1 al 10")
}




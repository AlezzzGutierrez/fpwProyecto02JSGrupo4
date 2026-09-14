import { esNumeroValido } from "../services/ejercicio04service.js";

console.log("Hola mundo desde ejercicio04.js");

const ingresoCadena = prompt("Ingrese una cadena como 3?5?2, usando dígitos del 0 al 5 intercalados con '?' y comenzando con un dígito");

const partes = ingresoCadena.split('?');

let cadenaValida = true;
let nuevaCadena = [];


if (!esNumeroValido(partes[0])) {
    cadenaValida = false;
    console.log("La cadena no comienza con un dígito válido");
}

for (let i = 0; i < partes.length; i++) {
    if (esNumeroValido(partes[i])) {
        console.log("Es válido");
    } else {
        cadenaValida = false;
        console.log("No es válido");
    }
}


if (cadenaValida) {
    for (let i = 0; i < ingresoCadena.length; i++) {
        if (ingresoCadena[i] === "?") {
            const izquierda = parseInt(ingresoCadena[i - 1]);
            const derecha = parseInt(ingresoCadena[i + 1]);
            const suma = izquierda + derecha;
            nuevaCadena.push(suma.toString());
        } else {
            nuevaCadena.push(ingresoCadena[i]);
        }
    }

    const resultado = nuevaCadena.join("");
    alert(`La nueva cadena es: ${resultado}`);
} else {
    alert("La cadena ingresada NO es válida");
}

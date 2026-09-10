
console.log("Hola mundo desde ejercicio01.js");

const ingresoCadena = prompt("Ingrese una cadena como 3?5?2, usando dígitos del 0 al 5 intercalados con '?' y comenzando con un dígito");

const partes = ingresoCadena.split('?');

const numerosValidos = [1, 3, 5];

for (let i = 0; i < partes.length; i++) {
      if (partes[i] === "1" || partes[i] === "3" || partes[i] === "5") {
        console.log("Es válido");
    } else {
        cadenaValida = false;
        console.log("No es válido");
    }
}
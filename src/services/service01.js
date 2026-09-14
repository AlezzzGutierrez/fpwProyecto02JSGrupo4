//Zona de Funciones
// Función para solicitar una letra al usuario
const pedirLetraValida = (mensaje) => {
    let letra = prompt(mensaje);
        // Muestra alerta si el ingreso no es válido y vuelve a pedir la letra
        //!letra significa que la variable letra está vacía o es nula, letra.length !== 1 significa que la longitud de la letra ingresada no es igual a 1, !isNaN(letra) significa que la letra ingresada no es un número
        while (!letra || letra.length !== 1 || !isNaN(letra)) {
            alert('Debe ingresar una letra');
            letra = prompt(mensaje);
        }
        return letra;
};

// Función principal que compara dos letras ingresadas por el usuario y contiene la validación de longitud del ingreso
export const compararLetras = () => {
    //Zona de Constantes
    const primer_ingreso = pedirLetraValida('Ingrese la primera letra:');
    const segundo_ingreso = pedirLetraValida('Ingrese la segunda letra:');

    //Muestra en consola las letras ingresadas
    console.log('Primera letra:', primer_ingreso);
    console.log('Segunda letra:', segundo_ingreso);

    //Compara las letras ingresadas y muestra el resultado en consola y en una alerta
    if (primer_ingreso === segundo_ingreso) {
        console.log(`Las letras ingresadas estan ubicadas en la misma posición.Letra ingresada: "${primer_ingreso}"`);
        alert(`Las letras ingresadas estan ubicadas en la misma posición. Letra ingresada: "${primer_ingreso}"`);
    } else {
        if (primer_ingreso < segundo_ingreso) {
            console.log(`La primera letra ingresada está ubicada antes que la segunda letra ingresada. Primer letra ingresada: "${primer_ingreso}". Segunda letra ingresada: "${segundo_ingreso}"`);
            alert(`La letra "${primer_ingreso}" está ubicada antes que la letra "${segundo_ingreso}"`);
        } else {
            console.log(`La primera letra ingresada está ubicada después que la segunda letra ingresada. Primer letra ingresada: "${primer_ingreso}". Segunda letra ingresada: "${segundo_ingreso}"`);
            alert(`La letra "${primer_ingreso}" está ubicada después que la letra "${segundo_ingreso}"`);
        }
    }
};
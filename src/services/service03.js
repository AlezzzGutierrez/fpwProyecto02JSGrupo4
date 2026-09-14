// ==========================================
// ZONA DE FUNCIONES
// ==========================================


// Creamos y exportamos la función principal.

// export:
// Permite que esta función pueda ser utilizada
// desde otro archivo JavaScript.

// const:
// Crea una constante que contiene nuestra función.

// compararCiudadPais:
// Es el nombre que elegimos para la función.

// ():
// Indica que la función no recibe parámetros.

// =>:
// Indica que estamos utilizando una función flecha.

// { }:
// Dentro de estas llaves escribiremos
// todas las instrucciones del ejercicio.
export const compararCiudadPais = () => {


    // ==========================================
    // INGRESO DE DATOS
    // ==========================================


    // Creamos una constante llamada "ciudad".

    // prompt():
    // Abre una ventana para que el usuario
    // pueda escribir un dato.

    // El texto que escriba el usuario
    // se guardará dentro de la constante "ciudad".

    // Por ejemplo, el usuario puede ingresar:
    // "San Salvador de Jujuy".
    const ciudad = prompt("Ingrese el nombre de la ciudad:");


    // Creamos una constante llamada "pais".

    // Nuevamente utilizamos prompt()
    // para pedir información al usuario.

    // En este caso, solicitamos el nombre del país.

    // Por ejemplo:
    // "Argentina".
    const pais = prompt("Ingrese el nombre del país:");



    // ==========================================
    // CONCATENACIÓN DE LAS CADENAS
    // ==========================================


    // Creamos una constante llamada "resultado".

    // El operador + permite unir cadenas de texto.

    // ciudad:
    // Contiene el nombre de la ciudad.

    // ", ":
    // Es un texto que contiene:
    // - Una coma.
    // - Un espacio en blanco.

    // pais:
    // Contiene el nombre del país.

    // Ejemplo :v :
    //
    // ciudad = "San Salvador de Jujuy"
    // pais = "Argentina"
    //
    // resultado será:
    //
    // "San Salvador de Jujuy, Argentina"
    const resultado = ciudad + ", " + pais;


    // Mostramos en la consola el resultado
    // de unir la ciudad y el país.

    // console.log():
    // Sirve para mostrar información
    // en la consola del navegador.
    console.log("Ciudad y país:", resultado);



    // ==========================================
    // CANTIDAD DE CARACTERES
    // ==========================================


    // .length:
    // Es una propiedad que permite conocer
    // la cantidad de caracteres de un string.

    // ciudad.length:
    // Cuenta los caracteres de la ciudad.

    // Por ejemplo:
    //
    // "Lima".length
    //
    // Resultado:
    //
    // 4
    const cantidadCiudad = ciudad.length;


    // Obtenemos la cantidad de caracteres
    // que tiene el nombre del país.

    // pais.length:
    // Cuenta los caracteres del string guardado
    // dentro de la variable "pais".
    const cantidadPais = pais.length;


    // Mostramos en la consola
    // la cantidad de caracteres de la ciudad.
    console.log("Cantidad de caracteres de la ciudad:", cantidadCiudad);


    // Mostramos en la consola
    // la cantidad de caracteres del país.
    console.log("Cantidad de caracteres del país:", cantidadPais);



    // ==========================================
    // COMPARACIÓN DE LAS LONGITUDES
    // ==========================================


    // Comparamos la cantidad de caracteres
    // que tiene la ciudad con la cantidad
    // de caracteres que tiene el país.

    // El símbolo > significa "mayor que".

    // Esta condición pregunta:
    //
    // ¿La ciudad tiene más caracteres que el país?
    if (cantidadCiudad > cantidadPais) {


        // Si la condición anterior es verdadera,
        // mostramos este mensaje.
        console.log("La ciudad tiene más caracteres que el país.");


    // Si la primera condición es falsa,
    // comprobamos otra condición.

    // else if significa:
    //
    // "Si lo anterior no se cumplió,
    // comprobá esta nueva condición".
    } else if (cantidadPais > cantidadCiudad) {


        // Esta condición pregunta:
        //
        // ¿El país tiene más caracteres que la ciudad?

        // Si es verdadera, mostramos este mensaje.
        console.log("El país tiene más caracteres que la ciudad.");


    // Si ninguna de las condiciones anteriores
    // fue verdadera, significa que ambas cantidades
    // son iguales.

    // Por ejemplo:
    //
    // cantidadCiudad = 4
    // cantidadPais = 4
    //
    // Ninguno es mayor que el otro.
    } else {


        // Mostramos un mensaje indicando
        // que ambos nombres tienen la misma
        // cantidad de caracteres.
        console.log(
            "La ciudad y el país tienen la misma cantidad de caracteres."
        );


    }


// Cerramos la función principal.
};
// ==========================================
// ZONA DE IMPORTACIONES
// ==========================================


// Importamos la función llamada "compararCiudadPais".

// import:
// Permite utilizar elementos que fueron exportados
// desde otro archivo de JavaScript.

// { compararCiudadPais }:
// Indicamos exactamente qué función queremos importar.

// "../services/service03.js":
// Le indicamos al programa dónde se encuentra
// el archivo que contiene la función.

import { compararCiudadPais } from "../services/service03.js";


// Ejecutamos la función principal.
//
// Al escribir el nombre de una función seguido
// de paréntesis (), estamos llamando a esa función.
//
// Esto hará que comience todo el ejercicio:
//
// 1. Pedir la ciudad.
// 2. Pedir el país.
// 3. Concatenar ambas cadenas.
// 4. Contar los caracteres.
// 5. Comparar sus longitudes.
// 6. Mostrar los resultados en la consola.
compararCiudadPais();
// services/validaciones.js

// Array con los números válidos
const numerosValidos = ["0", "1", "3", "5"];

// Función flecha para validar
const esNumeroValido = (num) => numerosValidos.includes(num);

// Exportamos la función para usarla en otros archivos
export { esNumeroValido };

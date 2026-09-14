import { calcularRendimiento } from "../services/ejercicio05service.js";

const formulario = document.querySelector("#formulario");
const totalPreguntas = document.querySelector("#totalPreguntas");
const respuestasCorrectas = document.querySelector("#respuestasCorrectas");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const total = parseInt(totalPreguntas.value);
  const correctas = parseInt(respuestasCorrectas.value);

  const mensaje = calcularRendimiento(total, correctas);
  resultado.innerText = mensaje;
});
export function calcularRendimiento(total, correctas) {
  if (isNaN(total) || isNaN(correctas) || total <= 0 || correctas < 0 || correctas > total) {
    return "⚠️ Ingrese valores válidos.";
  }

  const porcentaje = (correctas / total) * 100;
  let categoria = "";

  if (porcentaje >= 90) categoria = "Excelente";
  else if (porcentaje >= 70) categoria = "Muy Bueno";
  else if (porcentaje >= 50) categoria = "Aprobado";
  else categoria = "Desaprobado";

  return `Rendimiento: ${porcentaje.toFixed(2)}% → ${categoria}`;
}
// Arreglo inicial de prueba
const calificaciones = [8, 6, 9, 7, 5, 10, 4, 7];

function analizarNotas() {
  const divRes = document.getElementById("resultado");
  divRes.innerHTML = "";

  // Reto opcional: Validar si existen notas fuera del rango [0, 10]
  for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] < 0 || calificaciones[i] > 10) {
      divRes.innerHTML = `<p class="error">Error: Se encontró la calificación ${calificaciones[i]}, la cual está fuera del intervalo de 0 a 10.</p>`;
      return;
    }
  }

  let suma = 0;
  let max = calificaciones[0];
  let min = calificaciones[0];
  let aprobadas = 0;
  let noAprobadas = 0;

  // Recorrido manual con ciclo for sin usar Math.max, Math.min ni reduce
  for (let i = 0; i < calificaciones.length; i++) {
    const nota = calificaciones[i];
    
    // Acumulador
    suma += nota;

    // Nota máxima
    if (nota > max) {
      max = nota;
    }

    // Nota mínima
    if (nota < min) {
      min = nota;
    }

    // Contadores de aprobados/reprobados
    if (nota >= 7) {
      aprobadas++;
    } else {
      noAprobadas++;
    }
  }

  const promedio = suma / calificaciones.length;

  divRes.innerHTML = `
    <p><strong>Calificaciones:</strong> [ ${calificaciones.join(", ")} ]</p>
    <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
    <p><strong>Calificación más alta:</strong> ${max}</p>
    <p><strong>Calificación más baja:</strong> ${min}</p>
    <p><strong>Aprobadas (>= 7):</strong> ${aprobadas}</p>
    <p><strong>No aprobadas (< 7):</strong> ${noAprobadas}</p>
  `;
}
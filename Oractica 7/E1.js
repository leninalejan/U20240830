// Seleccionamos todos los encabezados h1-h6
const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

// Usamos un bucle for para iterar sobre los encabezados
for (let i = 0; i < headers.length; i++) {
  // Cambiamos el texto de cada encabezado
  headers[i].innerText = `Nuevo Encabezado de nivel ${i + 1}`;
}

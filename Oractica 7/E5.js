// Ejercicio 5: Recorrer un objeto y sus propiedades
const persona = {
    nombre: "Lenin",
    edad: 19,
    ciudad: "San Miguel"
  };
  
  for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`); // Imprime cada propiedad y su valor
  }
  
// Ejercicio 4: Recorrer un array de nombres con diferentes operaciones
const nombres = ["Ana", "Luis", "María", "Juan", "Carlos", "Elena", "Sofía", "Pedro"];

// 1. Recorrer el array y mostrar cada nombre
console.log("Lista de nombres: ");
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]); // Imprime cada nombre en el array
}

// 2. Contar la cantidad total de nombres
let cantidadNombres = nombres.length;
console.log("\nCantidad total de nombres: " + cantidadNombres);

// 3. Buscar un nombre específico dentro del array
let nombreBuscado = "María";
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === nombreBuscado) {
    encontrado = true;
    console.log(`\nNombre "${nombreBuscado}" encontrado en la posición: ${i}`);
    break;
  }
}

if (!encontrado) {
  console.log(`\nEl nombre "${nombreBuscado}" no fue encontrado en el array.`);
}

// 4. Encontrar el nombre más largo en el array
let nombreMasLargo = nombres[0];
for (let i = 1; i < nombres.length; i++) {
  if (nombres[i].length > nombreMasLargo.length) {
    nombreMasLargo = nombres[i];
  }
}
console.log("\nEl nombre más largo es: " + nombreMasLargo);

// 5. Convertir todos los nombres a mayúsculas y mostrarlos
console.log("\nNombres en mayúsculas:");
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i].toUpperCase());
}

// 6. Agregar un nuevo nombre al array y mostrar la lista actualizada
let nuevoNombre = "Gabriela";
nombres.push(nuevoNombre);
console.log(`\nLista actualizada de nombres (después de agregar "${nuevoNombre}"):`);
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// 7. Eliminar el último nombre del array y mostrar la lista actualizada
nombres.pop();
console.log("\nLista de nombres después de eliminar el último:");
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// 8. Invertir el orden de los nombres y mostrarlos
console.log("\nNombres en orden inverso:");
for (let i = nombres.length - 1; i >= 0; i--) {
  console.log(nombres[i]);
}

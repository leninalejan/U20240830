const readline = require('readline');

// Configuramos readline para recibir entradas del usuario 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num; // Corrección: let debe estar en minúscula

function pedirNumero() {
  rl.question("Introduce un número mayor a 5: ", (input) => {
    // Convertimos la entrada a número
    num = parseInt(input);
    
    if (num > 5) {
      console.log(`Número válido: ${num}`);
      rl.close(); // Cerramos la interfaz de readline
    } else {
      console.log("El número debe ser mayor a 5.");
      pedirNumero(); // Volvemos a pedir el número si no es válido
    }
  });
}

pedirNumero();

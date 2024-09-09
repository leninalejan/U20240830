const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarEdad() {
    return new Promise((resolve) => {
        rl.question('Por favor, ingresa tu edad: ', (edadIngresada) => {
            resolve(parseInt(edadIngresada)); 
        });
    });
}
function validarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Edad apta para acceder al contenido");
        } else {
            reject("Esta edad no es permitida");
        }
    });
}
preguntarEdad()
    .then((edadIngresada) => {
        return validarEdad(edadIngresada); 
    })
    .then((mensaje) => {
        console.log(mensaje); 
    })
    .catch((error) => {
        console.error(error); 
    })
    .finally(() => {
        rl.close(); 
    });

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function preguntarMonto() {
    return new Promise((resolve) => {
        rl.question('Por favor, ingresa el monto de tu compra: ', (montoIngresado) => {
            resolve(parseFloat(montoIngresado)); 
        });
    });
}


function procesarCompra(monto) {
    return new Promise((resolve, reject) => {
        if (monto > 0) {
            setTimeout(() => {
                resolve(`Compra completada por $${monto}`);
            }, 2000); 
        } else {
            reject("Monto inválido para la compra");
        }
    });
}
preguntarMonto()
    .then((montoIngresado) => {
        return procesarCompra(montoIngresado); 
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

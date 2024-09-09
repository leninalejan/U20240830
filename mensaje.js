const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function enviarCorreo(direccionCorreo) {
    return new Promise((resolve, reject) => {
        if (!direccionCorreo) {
            reject("Dirección de correo no proporcionada");
        } else {
            setTimeout(() => {
                resolve(`Correo enviado a ${direccionCorreo}`);
            }, 2000); 
        }
    });
}

rl.question('Por favor, ingresa tu dirección de correo: ', (correoIngresado) => {
    enviarCorreo(correoIngresado)
        .then((mensaje) => {
            console.log(mensaje);
            rl.close();
        })
        .catch((error) => {
            console.error(error);
            rl.close();
        });
});


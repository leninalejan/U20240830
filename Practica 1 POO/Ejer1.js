class Coche {  
    constructor(marca, modelo, año, encendido) {
        this._marca = marca;
        this._modelo = modelo;
        this._año = año;
        this._encendido = encendido;
    }
}


let Coche1 = new Coche("Toyota", "Supra", 1980, true); 


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question(`Ingrese si el coche está encendido (true/false): `, (respuesta) => {
    Coche1._encendido = respuesta.toLowerCase() === "true"; 

    console.log(`${Coche1._encendido}`);

    if (Coche1._encendido) {
        console.log(`El coche está encendido: ${Coche1._encendido}`);
    } else {
        console.log(`El coche está apagado: false`);
    }

    console.log(`Es el coche ${Coche1._marca} ${Coche1._modelo}, el año es ${Coche1._año}.`);

    rl.close(); 
});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Por favor, ingresa tu edad: ", (edad) => {
    let categoria = "";

    if (edad >= 0 && edad <= 12) {
        categoria = "niño";
    } else if (edad >= 13 && edad <= 17) {
        categoria = "adolescente";
    } else if (edad >= 18 && edad <= 35) {
        categoria = "adulto joven";
    } else if (edad >= 36 && edad <= 59) {
        categoria = "adulto";
    } else if (edad >= 60) {
        categoria = "adulto mayor";
    } else {
        categoria = "edad no válida";
    }

    console.log(`La persona es: ${categoria}`);

    readline.close();
});


let readline = require('readline')

let rl= readline.creteInterface(
    process.stdin,
    process.stdout
)

rl.question('Cual es su nombre?',(nombre)=> {
    console.log(`Hola, ${nombre}!`);
    process.exit()
})
 
let readline= require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)    
rl.question('Ingrese un mensaje:' , (mensaje)=>{
    const numCaracteres=mensaje.length
    console.log(`El numero de caracteres del mensajes es: ${numCaracteres}`)
    process.exit()
})
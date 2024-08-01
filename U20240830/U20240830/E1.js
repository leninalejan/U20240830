let readline= require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('cual es tu nombre ?', (nombre)=>{
    rl.question('Cual es tu apelllido?', (apellido)=>{
        console.log (`Hola,${nombre} ${apellido}!`)
        process.exit()
    })
})
   
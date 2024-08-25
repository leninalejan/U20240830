

let fecha1= new Date( "2024-08-12")
let fecha2= new Date("2024-07-12")

let difmin = (fecha1- fecha2) / (1000 * 60)
let difFecha = difmin / (60*24)

 console.log(`Esta es la diferencia entre las fechas: ${difFecha} Dias`)
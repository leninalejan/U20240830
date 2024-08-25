
let fechaActual = new Date();
let mesActual = fechaActual.getMonth();
let nobresMeses =["Enero ","Febrero","Marzo","Abril","Mayo","Junio","Julio ","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];
let nombreMes= nobresMeses[mesActual];

console.log(`Este es el mes en que estamos: ${nombreMes}`);
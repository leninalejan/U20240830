
let fechaActual = new Date('Feb 20, 2012, 03:12 am');
let fechadia = fechaActual.getDate();
let mesActual = fechaActual.getMonth();
let nobresMeses =["Ene ","Feb","Mar","Abr","May","Jun","Jul ","Ago","Sep","Oct","Nov","Dic",];
let nombreMes= nobresMeses[mesActual];
let numAño = fechaActual.getFullYear();
let numHora = fechaActual.getHours();
let numMin = fechaActual.getMinutes();


console.log(`${nombreMes} ${fechadia }, ${ numAño }, ${numHora}:${numMin}am` );

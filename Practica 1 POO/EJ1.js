class Carro {
    constructor(color, marca, modelo, año) {
        this._color = color;
        this._marca = marca;
        this._modelo = modelo;
        this._año = año;
    }
}

//creacion de persona 
const persona = {
    //Atributos 
    nombre: "Lenin",
    edad: 19,

    //Metodos 
    saludar: function () {
        console.log(`Hola ${this.nombre}`)
    }
}

console.log(persona.nombre);

console.log(persona[`edad`])

persona.ocupacion = "Desarrollador"

console.log(persona.ocupacion)

delete persona.edad
console.log(persona[`edad`])
console.log(persona)

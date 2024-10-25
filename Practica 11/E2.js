class Persona {
    constructor(nombre, apellido) {
        // Propiedades privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Método get para obtener el nombre completo 
    get nombreCompleto() {
        return `${this._nombre} ${this._apellido}`;
    }

    // Método set para asignar el nombre completo
    set nombreCompleto(nombreCompleto) {
        [this._nombre, this._apellido] = nombreCompleto.split(" ");
    }
}

const persona = new Persona("Lenin", "Hernández");
persona.nombreCompleto = "Alejandro Coreas";
console.log(`Nombre completo: ${persona.nombreCompleto}`);


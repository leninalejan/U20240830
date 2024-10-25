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
}

const persona = new Persona("Lenin", "Hernández");
console.log(`Nombre completo: ${persona.nombreCompleto}`);

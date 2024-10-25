class Usuario {
    constructor(username) {
        this._username = username;
    }

    // Getter para obtener el nombre de usuario
    get username() {
        return this._username;
    }

    // Setter para validar la longitud del nombre de usuario
    set username(username) {
        if (username.length >= 3) {
            this._username = username;
        } else {
            console.log(`El nombre de usuario '${username}' debe tener al menos 3 caracteres`);
        }
    }
}

const usuario = new Usuario('Luz');
console.log(`Nombre válido: ${usuario.username}`);
usuario.username = 'lu';
usuario.username = 'Lupe';
console.log(`Nombre válido: ${usuario.username}`);


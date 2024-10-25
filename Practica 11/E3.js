class Clima {
    constructor(celcius) {
        this._celcius = celcius;
    }
    // Get para obtener la temperatura en Fahrenheit
    get fahrenheit() {
        return (this._celcius * 9) / 5 + 32;
    }

    // Set para asignar la temperatura en Fahrenheit
    set fahrenheit(fahrenheit) {
        this._celcius = ((fahrenheit - 32) * 5) / 9;
    }

    // Get y set para la temperatura en Celsius
    get celcius() {
        return this._celcius;
    }

    set celcius(celcius) {
        this._celcius = celcius;
    }
}

const clima = new Clima(30);
console.log(`Clima en grados Fahrenheit: ${clima.fahrenheit} °F`);

clima.fahrenheit = 86;
console.log(`Clima en grados celcius: ${clima.celcius} °C`)

class Articulo {
    constructor(nombre, precio, stock) {
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }
    comprar(cantidad) {
        if (cantidad > 0 && this._stock > 0 && this._stock - cantidad >= 0) {
            this._stock -= cantidad;
            let total = cantidad * this._precio;

            if (cantidad > 1) {
                console.log(`Usted a comprado ${cantidad} unidades del producto ${this._nombre} - total: $${total}.`);
            } else {
                console.log(`Usted a comprado ${cantidad} unidades del producto ${this._nombre} - total: $${total}.`);
            }
        }
        else if (this._stock <= 0) {
            console.log(`El producto ${this._nombre} actuamente esta agotado`);
        }
        else if (this._stock - cantidad < 0) {
            console.log(`La cantidad que quiee comprar es demasiada, actulmente solo hay ${this._stock} uidades del producto ${this._nombre}.`);
        }
        else {
            console.log("La cantidad del producto a comprar debe ser mayor a 0.");
        }
    }
    reabastecer(cantidad) {
        if (cantidad > 0) {
            this._stock += cantidad;
            console.log(`Reabasteciedoel stock - Cantidad disponibledel proucto ${this._nombre} = ${this._stock}.`);
        } else {
            console.log("Cantida que desea eabastecr debe ser mayo a 0.")
        }
    }
}

const ART = new Articulo("Jabon", 20, 10);

ART.comprar(11);
ART.comprar(1);

ART.reabastecer(20);

ART.comprar(15);
const prendas = [
    { id: 1, prenda: "remera lisa negra", precio: 7000 },
    { id: 2, prenda: "remera lisa blanca", precio: 7000 },
    { id: 3, prenda: "jeans azules", precio: 18000 },
    { id: 4, prenda: "camisa a cuadros", precio: 20000 },
    { id: 5, prenda: "campera deportiva", precio: 15000 },
    { id: 6, prenda: "buzo liso negro", precio: 15000 },
    { id: 7, prenda: "buzo liso verde", precio: 15000 },
    { id: 8, prenda: "buzo liso bordó", precio: 15000 },
    { id: 9, prenda: "buzo estampado", precio: 17000 },
    { id: 10, prenda: "jeans negros", precio: 18000 },
    { id: 11, prenda: "bermuda celeste", precio: 15000 },
    { id: 12, prenda: "bermuda blanca", precio: 15000 },
    { id: 13, prenda: "camisa lisa blanca", precio: 18000 },
    { id: 14, prenda: "campera de cuero", precio: 30000 },
    { id: 15, prenda: "campera de algodón estampada", precio: 18000 },
];

let nombre = prompt("Ingrese su nombre por favor");

alert("Bienvenido " + nombre + " a mi simulador interactivo");


let ingreso = prompt("1: Ver prendas por consola (corta la ejecución) \n2: Elegir una prenda \n3: Salir");

let montoTotalDeLosProductos = 0;
let bandera = false;

while (ingreso != "3") {
    if (ingreso == "1") {
        console.log(prendas);
        break;
    }
    else if (ingreso == "2") {
        const prendaElegida = prompt("Ingrese el nombre especifico de la prenda a elegir (con minúscula y respetando los espacios)");
        let cantidad = parseInt(prompt("Cantidad de " + prendaElegida + " que desee: "));

        const filtradoPorNombre = prendas.find((el) => {
            return el.prenda == prendaElegida;
        })
        console.log(filtradoPorNombre);
        console.log("Cantidad de productos: " + cantidad);

        let carrito = [];
        carrito.push(filtradoPorNombre);
        console.log(carrito);

        let metodoDePago = prompt("Ingrese el método de pago \n1 - Efectivo \n2 - Tarjeta de crédito (recargo de un 15%) \n0 - Salir de este apartado");

        while (metodoDePago != 0) {
            if (metodoDePago == "1") {
                const totalEfec = carrito.reduce((acc, el) => {
                    return acc += el.precio;
                }, 0);
                let monto = totalEfec * cantidad
                console.log("Monto a pagar: $" + monto);

                montoTotalDeLosProductos += monto;
                bandera = true;

                break;
            }
            else if (metodoDePago == "2") {
                const totalTarjeta = carrito.reduce((acc, el) => {
                    return acc += el.precio * 1.15;
                }, 0);
                let monto = totalTarjeta * cantidad
                console.log("Monto a pagar: $" + monto);

                montoTotalDeLosProductos += monto;
                bandera = true;

                break;
            }
            else
                alert("Método de pago incorrecto. Ingrese nuevamente");

            metodoDePago = prompt("Ingrese el método de pago \n1 - Efectivo \n2 - Tarjeta de crédito (recargo de un 15%) \n0 - Salir de este apartado");
        }

    }
    else
        alert("Número incorrecto. Vuelva a ingresar");

    ingreso = prompt("1: Ver prendas (por consola) \n2: Elegir una prenda \n3: Salir");
}


if (bandera == true || montoTotalDeLosProductos > 0) {
    console.log("El monto final a pagar es: $" + montoTotalDeLosProductos);
}

alert("Gracias " + nombre + " por utilizar el simulador");



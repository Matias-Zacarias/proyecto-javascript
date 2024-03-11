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


let ingreso = prompt("1: Ver prendas por consola (corta la ejecución) \n2: Elegir una prenda \n3: Salir del simulador");

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
            return el.prenda.includes(prendaElegida);
        })
        console.log(filtradoPorNombre);
        console.log("Cantidad de productos: " + cantidad);

        let carrito = [];
        carrito.push(filtradoPorNombre);
        console.log(carrito);

        let metodoDePago = prompt("Ingrese el método de pago \n1 - Efectivo \n2 - Tarjeta de crédito (tiene recargo) \n0 - Salir de este apartado");

        let banderaCuota = false

        while (metodoDePago != 0) {
            if (metodoDePago == "1") {
                const totalEfec = carrito.reduce((acc, el) => {
                    return acc += el.precio;
                }, 0);
                let monto = totalEfec * cantidad
                console.log("Monto a pagar en efectivo: $" + monto);

                montoTotalDeLosProductos += monto;
                bandera = true;

                break;
            }
            else if (metodoDePago == "2") {
                let cuotas = prompt("Ingrese las cuotas a pagar \n1: 5% de recargo \n3: 15% de recargo \n6: 25% de recargo \nx: Salir de las cuotas")

                while (cuotas != "x") {
                    if (cuotas == "1") {
                        const totalTarjeta = carrito.reduce((acc, el) => {
                            return acc += el.precio * 1.05;
                        }, 0);
                        let monto = totalTarjeta * cantidad
                        console.log("Monto a pagar: $" + monto);
                        console.log("------------------------------");

                        montoTotalDeLosProductos += monto;
                        bandera = true;
                        banderaCuota = true;

                        break;
                    }
                    else if (cuotas == "3") {
                        const totalTarjeta = carrito.reduce((acc, el) => {
                            return acc += el.precio * 1.15;
                        }, 0);
                        let monto = totalTarjeta * cantidad
                        console.log("Monto a pagar: $" + monto);
                        let cuota = monto / 3;
                        console.log("3 cuotas de: $" + cuota);
                        console.log("------------------------------");

                        montoTotalDeLosProductos += monto;
                        bandera = true;
                        banderaCuota = true;

                        break;
                    }
                    else if (cuotas == "6") {
                        const totalTarjeta = carrito.reduce((acc, el) => {
                            return acc += el.precio * 1.25;
                        }, 0);
                        let monto = totalTarjeta * cantidad
                        console.log("Monto a pagar: $" + monto);
                        let cuota = monto / 6;
                        console.log("6 cuotas de: $" + cuota);
                        console.log("------------------------------");

                        montoTotalDeLosProductos += monto;
                        bandera = true;
                        banderaCuota = true;

                        break;
                    }
                    else
                        alert("Valor inválido. Ingrese nuevamente")

                    cuotas = prompt("Ingrese las cuotas a pagar \n1: 5% de recargo \n3: 15% de recargo \n6: 25% de recargo \nx: Salir de las cuotas")
                }

            }
            else
                alert("Método de pago incorrecto. Ingrese nuevamente");

            if (banderaCuota)
                break;

            metodoDePago = prompt("Ingrese el método de pago \n1 - Efectivo \n2 - Tarjeta de crédito (tiene recargo) \n0 - Salir de este apartado");
        }

    }
    else
        alert("Número incorrecto. Vuelva a ingresar");

    ingreso = prompt("1: Ver prendas (por consola) \n2: Elegir una prenda \n3: Salir del simulador");
}


if (bandera == true || montoTotalDeLosProductos > 0) {
    console.log("El monto final a pagar es: $" + montoTotalDeLosProductos);
}

alert("Gracias " + nombre + " por utilizar el simulador");



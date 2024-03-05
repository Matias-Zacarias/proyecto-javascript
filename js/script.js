//Calculadora

// const Sumar = (n1, n2) => {
//     return parseFloat(n1) + parseFloat(n2);
// }

// const Restar = (n1, n2) => {
//     return parseFloat(n1) - parseFloat(n2);
// }

// const Multiplicar = (n1, n2) => {
//     return parseFloat(n1) * parseFloat(n2);
// }

// const Dividir = (n1, n2) => {
//     return parseFloat(n1) / parseFloat(n2);
// }

// const Potenciacion = (n1, n2) => {
//     return parseFloat(n1) ** parseFloat(n2);
// }

// const RaizCuadrada = (n1) => {
//     return parseFloat(Math.sqrt(n1));
// }

// const RaizCubica = (n1) => {
//     return parseFloat(Math.cbrt(n1));

// }

// let nombre = prompt("Ingrese su nombre por favor");

// alert("Bienvenido " + nombre + " a mi simulador interactivo");

// let opcion = prompt("Puede elegir una de las siguientes opciones (Presione 0 para salir del simulador): \n1: Cajero automático \n2: Calculadora");

// while (opcion != "0") {
//     if (opcion == "1") {
//         let saldo = 50000;
//         let op = prompt("Seleccione la opción: \n1: Consultar saldo \n2: Retirar Dinero \n3: Ingresar Dinero \n4: Salir del cajero automático");
//         while (op != "4") {
//             if (op == "1") {
//                 alert("Saldo disponible: $" + saldo);
//             }
//             else if (op == "2") {
//                 let retiro = parseFloat(prompt("Ingrese el monto que desea retirar:"));
//                 if (retiro <= saldo) {
//                     saldo = saldo - retiro;
//                     alert("Tu saldo es de $" + saldo);
//                 }
//                 else {
//                     alert("Saldo insuficiente");
//                 }
//             }
//             else if (op == "3") {
//                 let ingreso = parseFloat(prompt("Monto a ingresar:"));
//                 saldo = saldo + ingreso;
//                 alert("Tu saldo disponible es de $" + saldo);
//             }
//             else {
//                 alert("Ingrese una de las opciones disponibles");
//             }

//             op = prompt("Seleccione la opción: \n1: Consultar saldo \n2: Retirar Dinero \n3: Ingresar Dinero \n4: Salir del cajero automático");
//         }
//     }

//     else if (opcion == "2") {
//         let operacion = prompt("Seleccione la operación (Presione 8 para salir de la calculadora): \n1: Suma \n2: Resta \n3: Multiplicación \n4: División \n5: Potenciación \n6: Raíz cuadrada \n7: Raíz cúbica")

//         while (operacion != "8") {
//             if (operacion == "1") {
//                 let num1 = prompt("Ingrese el primer número para sumar");
//                 let num2 = prompt("Ingrese el segundo número para sumar");
//                 let resultado = Sumar(num1, num2);
//                 alert("El resultado de la suma es: " + resultado)
//             }
//             else if (operacion == "2") {
//                 let num1 = prompt("Ingrese el primer número para restar");
//                 let num2 = prompt("Ingrese el segundo número para restar");
//                 let resultado = Restar(num1, num2);
//                 alert("El resultado de la resta es: " + resultado);
//             }
//             else if (operacion == "3") {
//                 let num1 = prompt("Ingrese el primer número para multiplicar");
//                 let num2 = prompt("Ingrese el segundo número para multiplicar");
//                 let resultado = Multiplicar(num1, num2);
//                 alert("El resultado de la multiplicación es: " + resultado);
//             }
//             else if (operacion == "4") {
//                 let num1 = prompt("Ingrese el primer número para dividir");
//                 let num2 = prompt("Ingrese el segundo número para dividir");
//                 let resultado = Dividir(num1, num2);
//                 if (num2 != 0)
//                     alert("El resultado de la división es: " + resultado);
//                 else if (num1 == "0" && num2 == "0")
//                     alert("El formato usado no es válido");
//                 else
//                     alert("No se puede dividir por 0");
//             }
//             else if (operacion == "5") {
//                 let num1 = prompt("Ingrese el primer número para operar");
//                 let num2 = prompt("Ingrese el segundo número para operar");
//                 let resultado = Potenciacion(num1, num2);
//                 alert("El resultado de la potenciación es: " + resultado);
//             }
//             else if (operacion == "6") {
//                 let num1 = prompt("Ingrese el número que desea obtener la raíz cuadrada");
//                 let resultado = RaizCuadrada(num1);
//                 alert("El resultado de la raíz cuadrada es: " + resultado);
//             }
//             else if (operacion == "7") {
//                 let num1 = prompt("Ingrese el número que desea obtener la raíz cúbica");
//                 let resultado = RaizCubica(num1);
//                 alert("El resultado de la raíz cúbica es: " + resultado);
//             }
//             else {
//                 alert("Opcion inválida. Vuelva a ingresar");
//             }

//             operacion = prompt("Seleccione la operación (Presione 8 para salir de la calculadora): \n1: Suma \n2: Resta \n3: Multiplicación \n4: División \n5: Potenciación \n6: Raíz cuadrada \n7: Raíz cúbica")
//         }

//     }
//     else {
//         alert("Ingrese una de las 2 opciones")
//     }

//     opcion = prompt("Puede elegir una de las siguientes opciones (Presione 0 para salir del simulador): \n1: Cajero automático \n2: Calculadora");
// }


// alert("Gracias " + nombre + " por utilizar el simulador!!");


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

// let ingreso = prompt("1: Ingrese la prenda (ver coincidencias de lo ingresado) \n2: Escriba el nombre específico de la prenda a elegir");





// if (ingreso == 1) {
//     prompt("Ingrese la prenda (verás coincidencias de lo ingresado)");
//     const filtradoPorNombre = prendas.filter((elemento) => {
//         return elemento.prenda.includes(ingreso);
//     })

//     console.log(filtradoPorNombre);
// }
// else if (ingreso == 2) {

// }

function seleccionarPrenda(arr, prend) {
    return arr.find((elemento) => elemento.prenda.includes(prend));
}

let ropaElegida = prompt("Escriba el nombre específico de la prenda");
let encontrado = seleccionarPrenda(prendas, ropaElegida);
console.log(encontrado);


const prendasElegidas = [];

function agregar(arr, prenda) {
    arr.push(prenda);
    return arr;
}

agregar(prendasElegidas, encontrado);

//console.log(prendasElegidas);

let metodoDePago = prompt("Ingrese el método de pago \n1 - Efectivo \n2 - Tarjeta de crédito (15% de recargo)");

const precioTarjeta = prendas.map(elemento => {
    return {
        id: elemento.id,
        prenda: elemento.prenda,
        precio: elemento.precio * 1.15
    }
})

//console.log(precioTarjeta);

if (metodoDePago == 1) {
    function comprarRopa(ropa, recargo) {
        return ropa.reduce((acu, el) => {
            return acu += el.precio;
        }, recargo);
    }

    console.log("El total a pagar es: $" + comprarRopa(prendasElegidas, 0));
}
else if(metodoDePago == 2){
    console.log(precioTarjeta);
}
else{
    alert("Método incorrecto");
}


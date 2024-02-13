//Calculadora
const Sumar = (n1, n2) => {
    return parseFloat(n1) + parseFloat(n2);
}

const Restar = (n1, n2) => {
    return parseFloat(n1) - parseFloat(n2);
}

const Multiplicar = (n1, n2) => {
    return parseFloat(n1) * parseFloat(n2);
}

const Dividir = (n1, n2) => {
    return parseFloat(n1) / parseFloat(n2);
}

const Potenciacion = (n1, n2) => {
    return parseFloat(n1) ** parseFloat(n2);
}

const RaizCuadrada = (n1) => {
    return parseFloat(Math.sqrt(n1));
}

const RaizCubica = (n1) => {
    return parseFloat(Math.cbrt(n1));

}

let nombre = prompt("Ingrese su nombre por favor");

alert("Bienvenido " + nombre + " a mi simulador interactivo");

let opcion = prompt("Puede elegir una de las siguientes opciones (Presione 0 para salir del simulador): \n1: Cajero automático \n2: Calculadora");

while (opcion != "0") {
    if (opcion == "1") {
        let saldo = 50000;
        let op = prompt("Seleccione la opción: \n1: Consultar saldo \n2: Retirar Dinero \n3: Ingresar Dinero \n4: Salir del cajero automático");
        while (op != "4") {
            if (op == "1") {
                alert("Saldo disponible: $" + saldo);
            }
            else if (op == "2") {
                let retiro = parseFloat(prompt("Ingrese el monto que desea retirar:"));
                if (retiro <= saldo) {
                    saldo = saldo - retiro;
                    alert("Tu saldo es de $" + saldo);
                }
                else {
                    alert("Saldo insuficiente");
                }
            }
            else if (op == "3") {
                let ingreso = parseFloat(prompt("Monto a ingresar:"));
                saldo = saldo + ingreso;
                alert("Tu saldo disponible es de $" + saldo);
            }
            else {
                alert("Ingrese una de las opciones disponibles");
            }

            op = prompt("Seleccione la opción: \n1: Consultar saldo \n2: Retirar Dinero \n3: Ingresar Dinero \n4: Salir del cajero automático");
        }
    }

    else if (opcion == "2") {
        let operacion = prompt("Seleccione la operación (Presione 8 para salir de la calculadora): \n1: Suma \n2: Resta \n3: Multiplicación \n4: División \n5: Potenciación \n6: Raíz cuadrada \n7: Raíz cúbica")

        while (operacion != "8") {
            if (operacion == "1") {
                let num1 = prompt("Ingrese el primer número para sumar");
                let num2 = prompt("Ingrese el segundo número para sumar");
                let resultado = Sumar(num1, num2);
                alert("El resultado de la suma es: " + resultado)
            }
            else if (operacion == "2") {
                let num1 = prompt("Ingrese el primer número para restar");
                let num2 = prompt("Ingrese el segundo número para restar");
                let resultado = Restar(num1, num2);
                alert("El resultado de la resta es: " + resultado);
            }
            else if (operacion == "3") {
                let num1 = prompt("Ingrese el primer número para multiplicar");
                let num2 = prompt("Ingrese el segundo número para multiplicar");
                let resultado = Multiplicar(num1, num2);
                alert("El resultado de la multiplicación es: " + resultado);
            }
            else if (operacion == "4") {
                let num1 = prompt("Ingrese el primer número para dividir");
                let num2 = prompt("Ingrese el segundo número para dividir");
                let resultado = Dividir(num1, num2);
                if (num2 != 0)
                    alert("El resultado de la división es: " + resultado);
                else if (num1 == "0" && num2 == "0")
                    alert("El formato usado no es válido");
                else
                    alert("No se puede dividir por 0");
            }
            else if (operacion == "5") {
                let num1 = prompt("Ingrese el primer número para operar");
                let num2 = prompt("Ingrese el segundo número para operar");
                let resultado = Potenciacion(num1, num2);
                alert("El resultado de la potenciación es: " + resultado);
            }
            else if (operacion == "6") {
                let num1 = prompt("Ingrese el número que desea obtener la raíz cuadrada");
                let resultado = RaizCuadrada(num1);
                alert("El resultado de la raíz cuadrada es: " + resultado);
            }
            else if (operacion == "7") {
                let num1 = prompt("Ingrese el número que desea obtener la raíz cúbica");
                let resultado = RaizCubica(num1);
                alert("El resultado de la raíz cúbica es: " + resultado);
            }
            else {
                alert("Opcion inválida. Vuelva a ingresar");
            }

            operacion = prompt("Seleccione la operación (Presione 8 para salir de la calculadora): \n1: Suma \n2: Resta \n3: Multiplicación \n4: División \n5: Potenciación \n6: Raíz cuadrada \n7: Raíz cúbica")
        }

    }
    else {
        alert("Ingrese una de las 2 opciones")
    }

    opcion = prompt("Puede elegir una de las siguientes opciones (Presione 0 para salir del simulador): \n1: Cajero automático \n2: Calculadora");
}


alert("Gracias " + nombre + " por utilizar el simulador!!");



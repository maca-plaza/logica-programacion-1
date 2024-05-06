// Solicitar al usuario 3 números por prompt y verificar que sean números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Verificar si los valores ingresados son números
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.error("Por favor, ingrese números válidos.");
} else {
    // Identificar el número mayor, el número del centro y el número menor
    let mayor, centro, menor;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        centro = num2 >= num3 ? num2 : num3;
        menor = num2 <= num3 ? num2 : num3;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        centro = num1 >= num3 ? num1 : num3;
        menor = num1 <= num3 ? num1 : num3;
    } else {
        mayor = num3;
        centro = num1 >= num2 ? num1 : num2;
        menor = num1 <= num2 ? num1 : num2;
    }

    // Imprimir los números por consola ordenados de mayor a menor
    console.log(`Números ordenados de mayor a menor: ${mayor}, ${centro}, ${menor}`);
    // Imprimir los números por consola ordenados de menor a mayor
    console.log(`Números ordenados de menor a mayor: ${menor}, ${centro}, ${mayor}`);

    // Identificar si los números son iguales
    if (num1 === num2 && num1 === num3) {
        console.log("Los números son iguales.");
    } else {
        console.log("Los números no son iguales.");
    }
}

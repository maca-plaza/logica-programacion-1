function analizarNumeros() {
    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    // Ordenar los números de mayor a menor
    var numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
        return b - a;
    });

    // Mostrar los números ordenados en el DOM
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>Números ordenados de mayor a menor: " + numeros.join(", ") + "</p>";

    // Verificar si los números son iguales
    if (num1 === num2 && num2 === num3) {
        resultadoDiv.innerHTML += "<p>Los números son iguales.</p>";
    }
}
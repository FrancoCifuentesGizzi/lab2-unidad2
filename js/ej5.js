// se crea función
function divisible() {
    // se ingresa número
    alert("Verificación de número divisible por dos");
    let num = prompt("Ingrese número");
    // se evalúa si el valor es divisible y entrega respuesta
    if (num % 2 == 0) {
        alert(num + " SI es divisible por dos");
    } else {
        alert(num + " NO es divisible por dos");
    }
}
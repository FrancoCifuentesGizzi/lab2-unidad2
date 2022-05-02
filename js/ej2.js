// se crea función
function suma() {
    //ingreso 2e valores a las variables
    let a = prompt("Suma de digitos: ingrese el primer digito para sumar");
    let b = prompt("Ingrese el segundo digito");
    // se entrega el resultado de la suma
    // se usa parseInt para obtener su valor numerico
    alert("El resultado es: " + (parseInt(a) + parseInt(b)));
}
// se crea función
function mayor() {
    // se reciben dos valores
    alert("Elección de valor mayor entre dos números")
    let a = prompt("Ingrese el primer valor: ");
    let b = prompt("Ingrese el segundo valor: ");
    // se condicionan para dar el resultado
    // si es mayor, menor o igual
    if (a > b) {
        alert(a + " es mayor que " + b);
    } 
    else if (a==b){
        alert("AMBOS SON IGUALES");
    } 
    else {
        alert(b + " es mayor que " + a);
    }
}
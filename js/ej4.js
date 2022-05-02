// se crea función
// se crea función
function mayorthree() {
    // se reciben tres valores
    alert("Elección de valor mayor entre tres números")
    let a = prompt("Ingrese el primer valor: ");
    let b = prompt("("+ a + ") Ingrese el segundo valor: ");
    let c = prompt("(" + a + ","+ b +") Ingrese el tercer valor: ");
    // se condicionan para dar el resultado
    // se determina el valor mayor en base a if
    if (a > b && a > c) {
        alert(a + " es el valor mayor");
    }
    else if (a==b && a==c){
        alert("LOS TRES SON LOS MISMOS VALORES");
    }
    else if (b > a && b > c){
        alert(b + " es el valor mayor");
    }
    else if (c > a && c > b) {
        alert(c + " es el valor mayor");
    }
}
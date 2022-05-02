// se crea función, array con archivos y variable de archivo actual
const fotos = ["./js/img/jsimg/1.jpg", "./js/img/jsimg/2.jpeg", "./js/img/jsimg/3.jpg", "./js/img/jsimg/4.jpeg", "./js/img/jsimg/5.jpg", "./js/img/jsimg/6.jpeg"];
var actual = 0;
// función con valor llamado de html que indica si avanza o retrocede
// entrega el directorio extraído del array
function foto(n){
    // el valor actual debe ser mayor a 0 para que retroceda (limite de array)
    if (actual > 0){
        // se descuenta uno al actual cuando indica retroceso
        if (n==0){
            actual = actual - 1;
            document.getElementById("imagen").src = fotos[actual];
        }
    }
    // el valor actual debe ser menor a 5 para que avance (limite de array)   
    if(actual < 5){
        // se aumenta uno al actual cuando indica avance
        if (n==1){
            actual = actual + 1;
            document.getElementById("imagen").src = fotos[actual];
        }
    }
}
// se crea función
function cuentaA() {
    // creación variable de frase, largo de frase y de contador en 0
    let frase = prompt(" Contador de leras 'A':\n Ingrese una frase a la que desea contarle las 'A'");
    let count = 0;
    let largo = frase.length;
    // se recorre la frase
    for (let i = 0; i < largo; i++) {
        // se buscan letras a o A en la frase
        if (frase[i]== "a" || frase[i]== "A" ) {
            // si se encuentra se suma 1 al contador
            count = count + 1;
        }
    }
    // se muestra mensaje con cantidad encontrada
    alert("Hay un total de: " + count + " A en su frase");
}
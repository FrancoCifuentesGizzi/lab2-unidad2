// se crea función
function contvocales() {
    // creación variable de frase, largo de frase y contadores de vocales
    let frase = prompt("Vocales en su frase:\n Ingrese una frase");
    let contA = 0;
    let contE = 0;
    let contI = 0;
    let contO = 0;
    let contU = 0;
    let largo = frase.length;
    // se recorre la frase
    for (let i = 0; i < largo; i++) {
        // se buscan las vocales, 
        // si se encuentra se suma 1 al contador respectivo
        if (frase[i] == "a" || frase[i] == "A") {
            contA = contA + 1;
        }
        if (frase[i] == "e" || frase[i] == "E") {
            contE = contE + 1;
        }
        if (frase[i] == "i" || frase[i] == "I") {
            contI = contI + 1;
        }
        if (frase[i] == "o" || frase[i] == "O") {
            contO = contO + 1;
        }
        if (frase[i] == "u" || frase[i] == "U") {
            contU = contU + 1;
        }
    }
    // se muestran las vocales encontradas en la frase
    alert("Vocales encontradas en su frase: " + frase + "\n A: " + contA + "\n E: " + contE + "\n I: " + contI + "\n O: " + contO + "\n U: " + contU);
}
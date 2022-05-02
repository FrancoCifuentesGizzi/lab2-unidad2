// se crea función
function vocales() {
    // creación variable de frase, largo de frase y booleano de vocal en falso
    let frase = prompt("Vocales en su frase:\n Ingrese una frase");
    let existA = false;
    let existE = false;
    let existI = false;
    let existO = false;
    let existU = false;
    let largo = frase.length;
    // se recorre la frase
    for (let i = 0; i < largo; i++) {
        // se buscan las vocales, 
        // si se encuentra se cambia booleano a true
        if (frase[i] == "a" || frase[i] == "A") {
            existA = true;
        }
        if (frase[i] == "e" || frase[i] == "E") {
            existE = true;
        }
        if (frase[i] == "i" || frase[i] == "I") {
            existI = true;
        }
        if (frase[i] == "o" || frase[i] == "O") {
            existO = true;
        }
        if (frase[i] == "u" || frase[i] == "U") {
            existU = true;
        }
    }
    // se muestran las vocales encontradas en la frase
    alert("Vocales encontradas en su frase: " + frase + "\n A: " + existA + "\n E: " + existE + "\n I: " + existI + "\n O: " + existO + "\n U: " + existU);
}
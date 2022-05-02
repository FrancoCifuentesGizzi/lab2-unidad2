// se crea función para cambiar de usd a clp
function cambiousdclp(){
    //variable tomada de formulario, se toma valor de usd y se multiplica por 850
    var cambiardol = document.getElementById("usd").value;
    let A= cambiardol * 850;
    // solo se realiza la función si se encuentra un número
    if(cambiardol == ""){
        alert("Debe rellenar el campo");
    }else if(isNaN(cambiardol) == true){
        alert("Solo numeros por favor");
    }else{
        // devuelve el valor resultante con id que se referencia en el html
        document.getElementById('clpresult').value=A;
    }
}
// se crea función para cambviar de clp a usd
function cambioclpusd(){
    //variable tomada de formulario, se toma valor de clp y se divide por 850
    var cambiarpes = document.getElementById("clp").value;
    let B = cambiarpes /850;
    // solo se realiza la función si se encuentra un número
    if(cambiarpes == ""){
        alert("Debe rellenar el campo");
    }else if (isNaN(cambiarpes)){
        alert("Solo numeros por favor");
    }else{
        // devuelve el valor resultante con id que se referencia en el html
        document.getElementById('usdresult').value=B;
    }
}
// se crea función
function dado() {
    // se crea un array con el nombre de los archivos
    // luego se usa un random para escoger uno de los archivos al azar
    const archivos = ["./js/img/dado/1.png", "./js/img/dado/2.png", "./js/img/dado/3.png", "./js/img/dado/4.png", "./js/img/dado/5.png", "./js/img/dado/6.png"];
    const aleatorio = archivos[Math.floor(Math.random() * archivos.length)];
    // se entrega el resultado al azar, el quw corresponde a uno de los archivos
    document.getElementById('dados').src= aleatorio;
}
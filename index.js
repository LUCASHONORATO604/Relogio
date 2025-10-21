
function atualizartempo() {


    let display = document.querySelector('.display')

    let agora = new Date();

    let horario = corrigirhorario(agora.getHours()) + ':' + corrigirhorario(agora.getMinutes()) + ':' + corrigirhorario(agora.getSeconds());

    display.textContent = horario;


}




function corrigirhorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;

}
setInterval(atualizartempo, 1000);

console.log(horario);
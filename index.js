
function atualizartempo() {


    let display = document.querySelector('.display')

    let agora = new Date();

    let horario = agora.getHours() + ':' +agora.getMinutes() + ':' + agora.getSeconds();

    display.textContent = horario;


}



setInterval(atualizartempo, 1000);

console.log(horario);
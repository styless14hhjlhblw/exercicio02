document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', evento => {

    evento.preventDefault();

    let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);

    if (isNaN(numeroMaximo) || numeroMaximo < 1) {
        document.getElementById('resultado-valor').innerText = "Por favor, insira um número válido maior que 0!";
        document.querySelector('.resultado').style.display = 'block';
        document.querySelector('.resultado').style.color = 'red';
    } else {
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
        document.querySelector('.resultado').style.color = 'black';
    }

    });
});

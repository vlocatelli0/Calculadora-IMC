function calculatImc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if (altura === '' || peso === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const alturaEmMetros = altura / 100;
    const imc = peso / (alturaEmMetros * alturaEmMetros);
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
}

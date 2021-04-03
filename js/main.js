const btn_calcular = document.getElementById("confirm-btn");


function calculateIMC(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    const result = document.getElementById("result-area");

    if(nome !== '' && peso !== '' && altura !== ''){
        altura = altura / 100;
        let imcValue = (peso / (altura * altura)).toFixed(1);
        let classification = '';
        let options = ['abaixo do peso.', 'com peso ideal. Parabéns!!!', 'levemente acima do peso.',
            'com obesidade grau I.', 'com obesidade grau II', 'com obesidade grau III. Cuidado!!']


        if(imcValue < 18.5){
            classification = options[0];
        }else if (imcValue < 25){
            classification = options[1];
        }else if(imcValue < 30){
            classification = options[2];
        }else if(imcValue < 35){
            classification = options[3];
        }else if(imcValue < 40){
            classification = options[4];
        }else{
            classification = options[5];
        }

        result.textContent  = nome + " seu IMC é: " + imcValue + " e você está: " + classification;
    }else{
        result.textContent  = 'Preencha todos os campos necessários!';
    }
}

btn_calcular.addEventListener('click', calculateIMC);


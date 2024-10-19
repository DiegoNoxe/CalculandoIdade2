const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e){
    e.preventDefault(); 
    const inputAge = e.target.querySelector('#age');
    const age      =  Number(inputAge.value);
  
    /* validando */
    if(age<= 1908 || age >= 2025)
    {
        setResultado('Idade invalida! Por favor, insira uma idade valida.');
        return;
    }


    const idade    = calculandoIdade(age);
    const msg      = getFaixaEtaria(idade);
    const informar = `Você tem ${idade} anos de idade e você é ${msg}`;  
    setResultado(informar);
});



function calculandoIdade(age)
{
    let dataAtual = new Date().getFullYear();
    const idade = age;
    const conta = dataAtual - age;
    return conta;
}

function getFaixaEtaria(idade) {
    const faixaEtaria = [
        'Bebê! Aproveite seus primeiros passos com muita alegria e amor.',
        'Criança! É hora de brincar, aprender e se divertir muito!',
        'Pré-adolescente! Comece a explorar o mundo com novas descobertas e aventuras.',
        'Adolescente! Desafios e mudanças estão à sua frente, aproveite para crescer e aprender.',
        'Pré-adulto! Hora de começar a planejar seu futuro e aproveitar suas novas responsabilidades.',
        'Adulto! Tempo de se focar nos seus objetivos e construir suas conquistas.',
        'Meia-idade! É um bom momento para equilibrar sua vida pessoal e profissional, sempre aprendendo.',
        'Pré-idoso! Aproveite sua experiência e prepare-se para viver uma fase mais tranquila e sábia.',
        'Idoso! Sua sabedoria é uma inspiração para todos. Aproveite a vida com calma e alegria.'
    ];

    if (idade >= 65) return faixaEtaria[8];
    if (idade >= 56) return faixaEtaria[7];
    if (idade >= 41) return faixaEtaria[6]; 
    if (idade >= 25) return faixaEtaria[5]; 
    if (idade >= 18) return faixaEtaria[4]; 
    if (idade >= 13) return faixaEtaria[3]; 
    if (idade >= 11) return faixaEtaria[2]; 
    if (idade >= 3)  return faixaEtaria[1];  

    return faixaEtaria[0]
}


function setResultado(msg)
{
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    resultado.classList.add('paragrafo-resultado');
    resultado.innerHTML = msg;
}


// let Titulo = document.querySelector('h1');
// Titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo1 = document.querySelector('p');
// paragrafo1.innerHTML = 'Digite um número Secreto';
let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let NumeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

exibirMensagensIniciais();

function exibirTextonatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {Rate:1.2});

}
function exibirMensagensIniciais (){
    exibirTextonatela('h1', "Jogo do Número Secreto");
    exibirTextonatela('p', `Digite um número entre 0 e ${numeroLimite}`);
   
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Voce acertou o número secreto com ${tentativas} ${palavraTentativa}!`;

    chute == NumeroSecreto ? exibirTextonatela ('h1',`Parabens!!`) + exibirTextonatela('p', mensagemTentativas) + document.getElementById('reiniciar').removeAttribute('disabled') : chute > NumeroSecreto ? exibirTextonatela('p','Passou') : exibirTextonatela ('p','Aumente um pouco mais');
    //console.log(chute == NumeroSecreto);
    tentativas++
    limparCampo();
    
}

function gerarNumeroaleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosnaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosnaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }
    // É necessário, depois disso identificar se o numeroEscolhido está na listaDeNumerosSorteados
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroaleatorio();
    }
        else {
            listaDeNumeroSorteados.push(numeroEscolhido);//Push inclui o número na lista
            console.log(listaDeNumeroSorteados)
            return numeroEscolhido
        }
    }

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    NumeroSecreto = gerarNumeroaleatorio();
    tentativas = 1;
    exibirMensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
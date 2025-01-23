//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaNomes = [];

function Limpar() {
    // Obtém o elemento input pelo ID
    const input = document.getElementById('amigo');
    // Define um novo valor no input
    input.value = ''
}

function limparLista(){
        // Obtém a <ul> pelo ID
        const ul = document.getElementById('listaAmigos');
        // Remove todos os <li> ao definir o innerHTML como vazio
        ul.innerHTML = '';
}

function limparResultado(){
     const exibirGanhador = document.getElementById('resultado');
     exibirGanhador.textContent = '';
}

function listaDeAmigosAdicionados(nome){
    // Obtém o Ul pelo ID
    const ul = document.getElementById('listaAmigos');
    // Cria um elemento
    const li = document.createElement('li');
    //Adiciona o conteudo no elemento Li
    li.textContent = nome;
    // Adiciona o elemento li como filha de ul
    ul.appendChild(li);
}

function adicionarAmigo(){
    //Limpar nome do Sorteado
    if(document.getElementById('resultado') != ''){
        limparResultado()
    }
    //Condição para adicionar um novo amigo a lista
    if(document.getElementById('amigo').value != ''){
        // Pega o valor do input pelo ID
        const nome = document.getElementById('amigo').value;
        // Adiciona o nome a um Array
        listaNomes.push(nome);
        //Adiciona o amigo na lista para vizualização 
        listaDeAmigosAdicionados(nome);    
        // Limpar o nome no Input
        Limpar();
    } else{
        //Exibe um alert de campo vazio
        alert('Nome do amigo não pode ser vazio!');
    }
}

function sortearAmigo(){
     // Gera um índice aleatório dentro do tamanho do array
     const sortearAmigo = parseInt(Math.random() * listaNomes.length );
     // Obtém o nome sorteado
     const sorteado = listaNomes[sortearAmigo];
     // Exibe o resultado
     const exibirGanhador = document.getElementById('resultado');
     exibirGanhador.textContent = `O sorteado é: ${sorteado}`;
     limparLista();
}

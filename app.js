const listaNomes = [];

function limparInput() {
    // Limpa o campo de input
    document.getElementById('amigo').value = '';
}

function limparLista() {
    // Limpa a lista de amigos exibida
    document.getElementById('listaAmigos').innerHTML = '';
}

function limparResultado() {
    // Limpa o campo de resultado do sorteio
    document.getElementById('resultado').textContent = '';
}

function adicionarAmigoNaLista(nome) {
    // Cria e adiciona um item à lista de amigos exibida
    const ul = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nome;
    ul.appendChild(li);
}

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo').value.trim();

    if (nomeInput === '') {
        alert('Nome do amigo não pode ser vazio!');
        return;
    }

    listaNomes.push(nomeInput);
    adicionarAmigoNaLista(nomeInput);
    limparInput();
    limparResultado();
}

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert('Nenhum amigo foi adicionado ainda!');
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * listaNomes.length);
    const sorteado = listaNomes[indexAleatorio];

    document.getElementById('resultado').textContent = `O sorteado é: ${sorteado}`;
    limparLista();
    // Muda o texto do botão para "Reiniciar"
    const botaoSortear = document.getElementById('botaoSortear');
    botaoSortear.textContent = 'Reiniciar';
    // Adiciona a funcionalidade de reiniciar
    botaoSortear.setAttribute('onclick', 'reiniciar()');
}

function reiniciar() {
    // Limpa a lista e o resultado
    listaNomes.length = 0;  // Limpa o array de nomes
    limparLista();
    limparResultado();
    // Restaura o nome original do botão e sua ação
    const botaoSortear = document.getElementById('botaoSortear');
    botaoSortear.textContent = 'Sortear Amigo';
    botaoSortear.setAttribute('onclick', 'sortearAmigo()');
}
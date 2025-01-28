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

    // Gera um índice aleatório e sorteia o nome
    const indexAleatorio = Math.floor(Math.random() * listaNomes.length);
    const sorteado = listaNomes[indexAleatorio];

    // Exibe o resultado do sorteio
    document.getElementById('resultado').textContent = `O sorteado é: ${sorteado}`;
    limparLista();
}

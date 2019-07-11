var ulLista = document.getElementById('ulLista');
var inputAdd = document.getElementById('inputAdd');
var btnAdd = document.getElementById('btnAdd');

var atividades = JSON.parse(localStorage.getItem('keyAtividades')) || [];

function exibirAtividades(){
    ulLista.innerHTML = '';

    for (const iterator of atividades) {
        var liLista = document.createElement('li');
        var texto = document.createTextNode(iterator);

        var hrefExcluir = document.createElement('a');
        var hrefTexto = document.createTextNode(' Excluir');

        var pos = atividades.indexOf(iterator);
        hrefExcluir.setAttribute('onclick', `excluirAtividade(${pos})`);

        hrefExcluir.setAttribute('href', '#');

        hrefExcluir.appendChild(hrefTexto);
        liLista.appendChild(texto);
        liLista.appendChild(hrefExcluir);

        ulLista.appendChild(liLista);
    }
}

function addAtividade(){
    var atividade = inputAdd.value;
    atividades.push(atividade);
    inputAdd.value = "";
    exibirAtividades();
    salvarLocalStorage();
}

function excluirAtividade(pos){
    atividades.splice(pos, 1);
    exibirAtividades();
    salvarLocalStorage();
}

btnAdd.onclick = function(){
    addAtividade();
    exibirAtividades();
}

function salvarLocalStorage(){
    localStorage.setItem('keyAtividades', JSON.stringify(atividades));
}

exibirAtividades();



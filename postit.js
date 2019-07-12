var divQuadroPostit = document.getElementById('divQuadroPostit');
var btnAddPostit = document.getElementById('btnAddPostit');
var radioNvBaixo = document.getElementById('radioNvBaixo');
var radioNvMedio = document.getElementById('radioNvMedio');
var radioNvAlto = document.getElementById('radioNvAlto');
var inputTextoPostit = document.getElementById('inputTextoPostit');

var arrayPostit = JSON.parse(localStorage.getItem('keyPostit')) || [];

function exibirPostit() {
    divQuadroPostit.innerHTML = '';

    for (const i of arrayPostit) {
        var quadradoPostit = document.createElement('div');
        var texto = document.createTextNode(i.texto);
        var textoPostit = document.createElement('p');
        var botaoExcluir = document.createElement('button');
        var btnTexto = document.createTextNode('Excluir');

        botaoExcluir.style.width = "10%";
        botaoExcluir.style.height = "30%";

        var pos = arrayPostit.indexOf(i);
        botaoExcluir.setAttribute('onclick', `deletaPostit(${pos})`);

        textoPostit.style.fontSize = "25px";

        quadradoPostit.style.width = "250px";
        quadradoPostit.style.height = "200px";
        quadradoPostit.style.margin = "25px";

        if (i.nivel == 1) {
            quadradoPostit.style.backgroundColor = '#00FF00';
        } else if (i.nivel == 2) {
            quadradoPostit.style.backgroundColor = '#FFFF00';
        } else {
            quadradoPostit.style.backgroundColor = '#FF0000';
        }

        textoPostit.appendChild(texto);
        botaoExcluir.appendChild(btnTexto);
        quadradoPostit.appendChild(textoPostit);
        divQuadroPostit.appendChild(quadradoPostit);
        divQuadroPostit.appendChild(botaoExcluir);

        //console.log(arrayPostit);
    }

}

function validaForm() {
    if ((inputTextoPostit.value != "") && (radioNvAlto.checked == true || radioNvMedio.checked == true || radioNvBaixo.checked == true)) {
        adicionarPostit();
        inputTextoPostit.value = '';
        radioNvBaixo.checked = false;
        radioNvMedio.checked = false;
        radioNvAlto.checked = false;
    } else {
        alert('Preencha os Campos!');
    }

}

function adicionarPostit() {
    var textoPostit = inputTextoPostit.value;
    var nivelPostit;

    if (radioNvBaixo.checked == true) {
        nivelPostit = 1;
    } else if (radioNvMedio.checked == true) {
        nivelPostit = 2;
    } else {
        nivelPostit = 3;
    }

    var objPostit = {
        texto: textoPostit,
        nivel: nivelPostit
    }

    arrayPostit.push(objPostit);
    exibirPostit();
    salvarLocalStorage();
}

function deletaPostit(pos) {
    arrayPostit.splice(pos,1);
    exibirPostit();
    salvarLocalStorage();
}

function salvarLocalStorage(){
    localStorage.setItem('keyPostit', JSON.stringify(arrayPostit));
}

btnAddPostit.onclick = function () {
    validaForm();
}

exibirPostit();
//EXERCICIO 1
var btnQuadrado = document.getElementById('btnQuadrado');
var divGeral = document.getElementById('divGeral');

btnQuadrado.onclick = function(){
    var divQuadrado = document.createElement('div');
    divQuadrado.style.width = "100px";
    divQuadrado.style.height = "100px";
    divQuadrado.style.backgroundColor = '#FF0000';
    divQuadrado.style.margin = "25px";
    divGeral.style.display = "flex";

    divQuadrado.onmouseover = function(){
        divQuadrado.style.backgroundColor = getRandomColor();
    }

    divGeral.appendChild(divQuadrado);
}

//EXERCICIO 2
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// LINHA 13 - 15 FAZ PARTE DO EXERCICIO 2



//EXERCICIO 3 E 4

var nomes = ["Diego", "Gabriel", "Lucas", "Helvécio"];
var ulListas = document.getElementById('ulListas');

var inputNome = document.getElementById('inputNome');
var btnAddNome = document.getElementById('btnAddNome');

for (const i of nomes) {
    var liNome = document.createElement('li');
    var texto = document.createTextNode(i);

    liNome.appendChild(texto);
    ulListas.appendChild(liNome);
}

btnAddNome.onclick = function(){
    var liNomeBtn = document.createElement('li');
    var nome = document.createTextNode(inputNome.value);
    
    liNomeBtn.appendChild(nome);
    ulListas.appendChild(liNomeBtn);
    inputNome.value = '';
}




   
//EXERCICIO 1

//CAPTURA OS ELEMENTOS - CAPTURE THE ELEMENTS
var btnQuadrado = document.getElementById('btnQuadrado');
var divGeral = document.getElementById('divGeral');

btnQuadrado.onclick = function(){ // AO CLICAR NO BOTAO CHAMA FUNCAO DE CRIAR UM QUADRADO - CLICK ON BUTTON CALL FUNCTION TO CREATE A SQUARE
    criaQuadrado();
}




//EXERCICIO 2
function getRandomColor() { // FUNCAO QUE GERA CORES ALEATORIAS - FUNCTION GENERATING RANDOM COLORS
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function criaQuadrado(){ // FUNCAO PARA CRIAR QUADRADO - FUNCTION TO CREATE SQUARE
    var divQuadrado = document.createElement('div');
    divQuadrado.style.width = "100px";
    divQuadrado.style.height = "100px";
    divQuadrado.style.backgroundColor = '#FF0000';
    divQuadrado.style.margin = "25px";
    divGeral.style.display = "flex";

    divQuadrado.onmouseover = function(){ //FUNCAO AO PASSAR O MOUSE EMCIMA DO QUADRADO ALTERA DE COR - FUNCTION WHEN PASSING THE MOUSE ABOVE THE COLOR CHANGE SQUARE
        divQuadrado.style.backgroundColor = getRandomColor();
    }

    divGeral.appendChild(divQuadrado); //ADICIONA O QUADRADO CRIADO A DIV - ADD SQUARE CREATED TO DIV
}

// LINHA 13 - 15 FAZ PARTE DO EXERCICIO 2







//EXERCICIO 3 E 4

//CAPTURA OS ELEMENTOS - CAPTURE THE ELEMENTS
var nomes = ["Diego", "Gabriel", "Lucas", "Helvécio"];
var ulListas = document.getElementById('ulListas');
var inputNome = document.getElementById('inputNome');
var btnAddNome = document.getElementById('btnAddNome');

for (const i of nomes) { //INSERE OS NOMES NO ARRAY NA LSITA - INSERT NAMES IN ARRAY IN LIST
    var liNome = document.createElement('li'); //CRIA ELEMENTO LI - CREATE IT LI
    var texto = document.createTextNode(i); //CAPTURA NA VARIAVEL O NOME DO ARRAY - CAPTURE IN VARIABLE THE NAME OF ARRAY

    liNome.appendChild(texto); // INSERE NOME NA LI - INSERT NAME IN LI
    ulListas.appendChild(liNome); // INSERE LI NA UL - INSERT LI IN LU
}

btnAddNome.onclick = function(){// ADICIONA NOME DIGITADO NA LISTA - ADD NAME DIGITED IN LIST
    var liNomeBtn = document.createElement('li'); //CRIA ELEMENTO LI - CREATE IT LI
    var nome = document.createTextNode(inputNome.value); //CAPTURA O QUE FOI DIGITADO E INSERE NA VARIAVEL - CAPTURE WHAT HAS BEEN DIGITED AND INSERT IN THE VARIABLE
    
    liNomeBtn.appendChild(nome); // INSERIRE NOME NA LI - INSERT NOME IN LI
    ulListas.appendChild(liNomeBtn); // INSERE LI NA UL - INSERT LI IN LU
    inputNome.value = ''; //CAMPO INPUT VAZIO - EMPTY FIELD INPUT
}




   
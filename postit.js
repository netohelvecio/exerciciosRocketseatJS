// CAPTURA COMPONENTES NO HTML
var divQuadroPostit = document.getElementById('divQuadroPostit');
var btnAddPostit = document.getElementById('btnAddPostit');
var radioNvBaixo = document.getElementById('radioNvBaixo');
var radioNvMedio = document.getElementById('radioNvMedio');
var radioNvAlto = document.getElementById('radioNvAlto');
var inputTextoPostit = document.getElementById('inputTextoPostit');

var arrayPostit = JSON.parse(localStorage.getItem('keyPostit')) || []; // RETORNA DADOS EM JSON E TRANSFORMA EM ARRAY QUE É INSERIDO NA VARIAVEL

function exibirPostit() {
    divQuadroPostit.innerHTML = ''; // RESETA A DIV COM OS POSTIT

    for (const i of arrayPostit) { // FOR PARA PREENCHER OS DADOS DO ARRAY NOS POSTITS

        // CRIA OS ELEMENTOS PARA MONTAR AS POSTITS USANDO A FUNCAO CREATEELEMENTE
        var quadradoPostit = document.createElement('div');
        var texto = document.createTextNode(i.texto);
        var textoPostit = document.createElement('p');
        var botaoExcluir = document.createElement('button');
        var btnTexto = document.createTextNode('Excluir');

        //ESTILIZA BOTAO
        botaoExcluir.style.width = "10%";
        botaoExcluir.style.height = "30%";

        
        var pos = arrayPostit.indexOf(i);// PEGA POSICAO DO POSTIT NO ARRAY USANDO FUNCAO INDEXOF
        botaoExcluir.setAttribute('onclick', `deletaPostit(${pos})`); // DELETA O POSTIT CHAMANDO A FUNCAO DE DELETAPOSTIT

        //ESTILIZA A FONTE E O QUADRADO
        textoPostit.style.fontSize = "25px";

        quadradoPostit.style.width = "250px";
        quadradoPostit.style.height = "200px";
        quadradoPostit.style.margin = "25px";

        // ESTILIZA A COR DO POSTIT DE ACORDO COM O NIVEL DA ATIVIDADE
        if (i.nivel == 1) {
            quadradoPostit.style.backgroundColor = '#00FF00';
        } else if (i.nivel == 2) {
            quadradoPostit.style.backgroundColor = '#FFFF00';
        } else {
            quadradoPostit.style.backgroundColor = '#FF0000';
        }

        // ADICIONA OS ELEMENTOS DENTRO DA DIV E DOS BOTOES COM A FUNCAO APPENDCHILD
        textoPostit.appendChild(texto);
        botaoExcluir.appendChild(btnTexto);
        quadradoPostit.appendChild(textoPostit);
        divQuadroPostit.appendChild(quadradoPostit);
        divQuadroPostit.appendChild(botaoExcluir);

        //console.log(arrayPostit);
    }

}

function validaForm() { // FUNCAO PARA VALIDAR OS CAMPOS E ENVIAR OS DADOS
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

function adicionarPostit() { // FUNCAO PARA ADICIONAR DADOS DIGITADOS NO ARRAY

    // CAPTURA O QUE FOI DIGITADO
    var textoPostit = inputTextoPostit.value;
    var nivelPostit;

    // ADICIONAADA VALORES AO NIVEL DE ACORDO COM O SELECIONADO
    if (radioNvBaixo.checked == true) {
        nivelPostit = 1;
    } else if (radioNvMedio.checked == true) {
        nivelPostit = 2;
    } else {
        nivelPostit = 3;
    }

    //CRIA UM OBJERO PARA ARMAZENAR OS DADOS
    var objPostit = {
        texto: textoPostit,
        nivel: nivelPostit
    }

    arrayPostit.push(objPostit); // ADICIONA O OBJETO NO ARRAY COM A FUNCAO PUSH
    exibirPostit(); // EXIBE OS POSTITS
    salvarLocalStorage(); // SALVA NO LOCAL STORAGE
}

function deletaPostit(pos) { // FUNCAO PARA DELETAR POSTIT
    arrayPostit.splice(pos,1); // DELETA POSTIT USANDO A FUNCAO SPLICE, SE PASSA DOIS PARAMETROS 1 - A POSICAO DO OBJETO NO ARRAY E 2 - QUANTIDADES DE OBEJTOS QUE SERAO EXCLUIDOS APARTIR DESSA POS, NESSE CASO SO EXCLUI UMA
    exibirPostit(); // EXIBE OS POSTITS
    salvarLocalStorage(); // SALVA NO LOCAL STORAGE
}

function salvarLocalStorage(){ // FUNCAO PARA SALVAR NO LOCAL STORAGE
    localStorage.setItem('keyPostit', JSON.stringify(arrayPostit)); // SALVA NO LOCAL STORAGE MAS ANTES PRICASA TRANSFORMAR O ARRAY EM UM ARQUIVO JSON
}

btnAddPostit.onclick = function () { //FUNCAO PARA QUANDO CLICAR NO BOTAO DE ADD EXECUTAR TODOS OS PROCESSOS
    validaForm();
}

exibirPostit();
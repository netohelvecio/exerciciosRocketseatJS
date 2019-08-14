//ATIVIDADE 1

var checaIdade = function (idade){
    return new Promise(function(resolve, reject){

        setTimeout(function(){
            if(idade >= 18){
                resolve();
            }else{
                reject();
            }
        }, 2000);
    });
}

checaIdade(10)
    .then(function(){
        console.log('Maior que 18');
    })
    .catch(function(){
        console.log('Menor que 18');
    });




//ATIVIDADE 2 E 3

var inputBusca = document.getElementById('inputBusca');
var buttonBusca = document.getElementById('buttonBusca');
var ulInfo = document.getElementById('ulInfo');
var divAvatar = document.getElementById('divAvatar');

function mensagemLoading(){
    ulInfo.innerHTML = '';
    divAvatar.innerHTML = '';

    var liLoading = document.createElement('li');
    var texto = document.createTextNode('Carregando...');

    liLoading.appendChild(texto);
    ulInfo.appendChild(liLoading);
}

function mensagemError(){
    ulInfo.innerHTML = '';
    divAvatar.innerHTML = '';

    var liError = document.createElement('li');
    var texto = document.createTextNode('Nenhum usuario encontrado!');

    liError.appendChild(texto);
    ulInfo.appendChild(liError);
}

function carregarDadosUser(dadosUser){
    ulInfo.innerHTML = '';
    divAvatar.innerHTML = '';

    var arrayInfoUser = [
        dadosUser.name,
        dadosUser.id,
        dadosUser.login,
        dadosUser.location,
        dadosUser.html_url,
    ]

    for (const i of arrayInfoUser) {
        var liInfo = document.createElement('li');
        var texto = document.createTextNode(i);

        liInfo.appendChild(texto);
        ulInfo.appendChild(liInfo);
    }

    
    var imgAvatar = document.createElement('img');

    imgAvatar.setAttribute('src', dadosUser.avatar_url);
    imgAvatar.setAttribute('width', '150px');
    imgAvatar.setAttribute('height', '150px');

    divAvatar.appendChild(imgAvatar);
}

buttonBusca.onclick = function(){
    var userGit = inputBusca.value;

    mensagemLoading();

    axios.get('https://api.github.com/users/' + userGit)
    .then(function(response){
        carregarDadosUser(response.data);
    })
    .catch(function(error){
        mensagemError();
    });
}
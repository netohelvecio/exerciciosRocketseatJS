// PRIMEIRO EXERCICIO - FIRST EXERCISE
var address = { //CRIANDO OBJETO - CREATING OBJECT
    street: "Avenida Aliomar Baleeiro",
    number: 2000,
    district: "Nova Brasilia",
    city: "Salvador",
    uf: "BA"
};

function dataAddress(object){ //FUNCAO QUE RETORNA FRASE COM OS DADOS DO OBEJETO - FUNCTION THAT RETURNS PHRASE WITH OBJECT DATA
    return `O usuario mora em ${address.city}/${address.uf}, no bairro ${address.district}, na rua ${address.street} com o nº ${address.number}`;
} //UTILIZEI TEMPLATE STRINGS PARA CONCATENAR, UMA FORMA MAIS LIMPA E LEGIVEL DE CONCATENACAO - I USED TEMPLATE STRINGS TO CONCATENATE, IN A CLOSER AND LEGACY CONCATENATION FORM

console.log(dataAddress(address)); //EXIBE A FRASE NO CONSOLE - ISSUED ON THE CONSOLE




// SEGUNDO EXERCICIO - SECOND EXERCISE

function pairNumber(num1, num2){ //FUNCAO PARA RETORNAR SOMENTE NUMEROS PARES DENTRO DE UM INTERVALO - FUNCTION TO RETURN ONLY PAIR NUMBERS WITHIN ONE INTERVAL
    for(num1; num1 <= num2; num1++){ //FOR QUE PERCORRE DO PRIMEIRO NUMERO ATE O SEGUNDO - FOR FROM THE FIRST NUMBER TO THE LAST
        console.log((num1%2 == 0) ? num1 : ""); //ONLY CONSOLES ON PAIR NUMBERS
    }
}

pairNumber(20,126);



// TERCEIRO EXERCICIO - THIRD EXERCISE

function jsSkill(array){ //FUNCAO PARA PROCURAR SE O ARRAY TEM ALGUMA POSICAO COM O VALOR JAVASCRIPT - FUNCTION TO SEARCH IF ARRAY HAS SOME POSITION WITH THE JAVASCRIPT VALUE
    return array.indexOf("Javascript") == -1 ? false : true; // CASO NAO TIVER NENHUM VALOR RETORNA FALSE SE NAO TRUE - CASE DOES NOT HAVE ANY VALUE RETURNS FALSE IF NOT TRUE
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(jsSkill(skills));




// QUARTO EXERCICIO - FOURTH EXERCISE

function experience(years){ //FUNCAO QUE RETORNA O NIVEL DE EXPERIENCIA DE ACORDO COM OS ANOS - FUNCTION THAT RETURNS THE LEVEL OF EXPERIENCE IN ACCORDANCE WITH THE YEARS
    //LOGICA PARA DETERMINAR A EXPERIENCIA - LOGIC TO DETERMINE THE EXPERIENCE
    if(years <= 1){
        return "Iniciante";
    }else if(years > 1 && years <=3){
        return "Intermediário";
    }else if(years > 3 && years <=6){
        return "Avançado";
    }else{
        return "Jedi Master";
    }
}

console.log(experience(10));




// QUINTO EXERCICIO - FIFTH EXERCISE

var users = [ // ARRAY COM OBJETOS - ARRAY WITH OBJECTS
    { name: "Diego", skill: ["Javascript", "ReactJS", "Redux"] },
    { name: "Gabriel", skill: ["VueJS", "Ruby on Rails", "Elixir"] }
];

function showDados(array){ //FUNCAO PARA EXIBIR FRASE COM OS DADOS DO OBJETO - FUNCTION TO DISPLAY PHRASE WITH OBJECT DATA
    for(let i of array){ // FOR..0F PARA PASSAR EM TODAS POSICOES DO ARRAY - FOR..0F TO PASS IN ALL ARRAY POSITIONS
        console.log(`O ${i.name} possui as habilidades: ${i.skill.join(" - ")}`); // FUNCAO JOIN() USADA PARA JUNTAR TODAS POSICOES DO ARRAY - FUNCTION JOIN() USED TO JOIN ALL ARRAY POSITIONS
    }
}

showDados(users);
   
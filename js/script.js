//Comentário em JavaScript
/* 
    Comentário de múltiplas linhas
    em JavaScript
*/
//Forma de declaração de variantes em JavaScript
/*var nome = "João"; //Evite
let sobrenome = "Silva"; //USA, CARACOLES!
const idade = 30; //Constante, não pode ser alterada ao fluxo do código

console.log(nome);
console.log(sobrenome);
console.log(idade);

//exemplo de diferença entre var e let
if(true){
    var nome = "Maria";
    let sobrenome = "Ana";
}

console.log(nome); //Maria
console.log(sobrenome); //Silva
*/

//tipos de dados em JavaScript
/*
const nome = "Matheus";
console.log(typeof nome); //string
const idade = 25;
console.log(typeof idade); //number
const isStudent = true;
console.log(typeof isStudent); //boolean
const numerodecimal = 3.14;
console.log(typeof numerodecimal); //number
const nulo = null;
console.log(typeof nulo);
const indefinido = undefined;
console.log(typeof indefinido);
const simbolo = Symbol("simbolo");
console.log(typeof simbolo);
const objeto = { nome: "Carlos", idade: 40 };
console.log(typeof objeto);
const array = [1, 2, 3, 4, 5];
console.log(typeof array);

//Como declaramos um objeto em JavaScript
const pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira",
    hobbies: ["leitura", "viagem", "culinária"],
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.log(pessoa);
console.log(pessoa.nome);
*/
//lição de casa:
//criar um objeto que seja semelhandte aos dados do formulário de login
//imprimir o objeto no console
/*
//Objeto Usuário:

const usuario = {
    email: "exemplo@exemplo.com",
    senha: "123456",
    nome: "Exemplo de Exemplo",
    idade: 33,
    avatar: "./img/avatar/avatar-placeholder.png"
}

/*
//log de todos os atributos do objeto

console.log(usuario)
console.table(usuario)

//log de um atributo do objeto

console.log(usuario.nome)

//alterar a informação de um atributo direto no atributo

usuario.nome = "Exemplar dos Exemplissimos"
console.log(usuario.nome)

//Alterar a informação de um atributo com um objeto

let nome = "José"
usuario.nome = nome
console.log(usuario.nome)
*/

//let subtituloH2 = document.getElementById("teste");
//imprimindo o elemento capturado
//console.log(subtituloH2)
//Bora escrever no CORNO desse <h2>
//subtituloH2.textContent =  "Novo texto"
//subtituloH2.innerHTML = "<p>Sou cego</p>".toUpperCase()
/*
//Capturando o elemento de avatar!!
let imgAvatar = document.getElementById("avatar-user")

//Processando o avatar com os dados do objeto usuário
imgAvatar.src = usuario.avatar
imgAvatar.alt = usuario.nome
imgAvatar.width = 40
*/

//Recuperando dados dos campos da form e amarzenando em um objeto assim que o botão entrar dor clicado

//Conhecendo as Strings

/*let frase = "Olá, mundo!";
console.log(frase);

//Contando os caractéres de uma string

console.log(frase.length);
console.log(frase[2]);

//Realizando a leitura dinâmica de uma string

for(let x = 0; x < frase.length; x++){
    console.log(frase[x]);
    
    if(frase[x].toLocaleLowerCase() === "o"){
        console.log("Encontrei um o na posição " + x);
    }
}*/


//console.log(usuarios);
//console.table(usuarios);

//funções em JavaScript

/*function login(){
    //contexto da função
    let resultado = "Login realizado com sucesso!";
    resultado = "Login falhou! Verifique suas credenciais.";
    return resultado;
    }
    
    console.log(login());
    */
   
   //const botaoentrar = document.getElementById("btn-entrar");
   
   /*botaoentrar.addEventListener("click", function(event){
    console.log(this);
    })*/
    const usuarios = [
      {
        email: "zarak.vultos@exemplo.com",
        senha: "12345",
        nome: "Zarak dos Vultos",
        idade: 42,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "elara.astral@exemplo.com",
        senha: "12345",
        nome: "Elara Galáxia Astral",
        idade: 27,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "mordecai.bruma@exemplo.com",
        senha: "12345",
        nome: "Mordecai da Bruma",
        idade: 51,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "thallos.ferro@exemplo.com",
        senha: "12345",
        nome: "Thallos de Ferro",
        idade: 35,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "lyra.eco@exemplo.com",
        senha: "12345",
        nome: "Lyra Silvestre Eco",
        idade: 22,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "boros.fenda@exemplo.com",
        senha: "12345",
        nome: "Boros da Fenda Profunda",
        idade: 64,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "vaelin.nimbus@exemplo.com",
        senha: "12345",
        nome: "Vaelin Nimbus",
        idade: 30,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "selene.quartzo@exemplo.com",
        senha: "12345",
        nome: "Selene de Quartzo",
        idade: 29,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "kaelthas.sol@exemplo.com",
        senha: "12345",
        nome: "Kaelthas Brilho do Sol",
        idade: 47,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      },
      {
        email: "joric.martelo@exemplo.com",
        senha: "12345",
        nome: "Joric Martelo de Pedra",
        idade: 38,
        avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
      }
    ];

    /*
    usuarios.forEach((u, i)=>{
        console.log(i, u.nome);
    });
    */

    //capturando o botão de entrar para iniciar a tarefa de login
    const btnEntrar = document.getElementById("btn-entrar");
    //atrelando um evento ao botão de entrar para iniciar a tarefa de validação do login
    btnEntrar.addEventListener("click", ()=>{

    });
/*const leia = document.querySelector("h1");
leia.textContent = "Olá mundo";

let nomePessoa = "Gustavo";
console.log(nomePessoa);
nomePessoa = "H.Pereira"
console.log(nomePessoa);

var tipodeDoce = "chocolate"

if (tipodeDoce == "chocolate"){
    alert("Sim, é igual a chocolate")
}else {
    alert("Nao, Voce esta errado, nao e chocolate")
}
var alerta = document.querySelector("h1")
alert("Processa um dado")

//Multiplic

function multi (valor1, valor2){
    let result = valor1 * valor2;
    return result;
}
function div (valor1, valor2){
    let resul = valor1 / valor2
    return resul;
}
console.log(multi(2, 5))
console.log(div(5, 2))

document.querySelector("html")
.addEventListener("click", function (){
alert("opa Voce clicou na tela piaaaa")
})*/

var image = document.querySelector('img')
image.onclick = function (){
    let imagemAtt = image.getAttribute('src')
    if (imagemAtt == 'Imagens/firefox-icon.png'){
     image.setAttribute('src', 'Imagens/firefox2.png')
    }else {
        image.setAttribute('src', 'Imagens/firefox-icon.png')
    }
}

//MANIPULANDO O NOME DO USUARIO
var nomeP = document.querySelector('button');
var novoT = document.querySelector('h1');
 function setNPNT(){
    let meuNome = prompt('Digite seu nome.');
    alert(`Bem vindo ${meuNome}`)
     if (!meuNome){
         setNPNT();
     }else {
         localStorage.setItem('name', meuNome);
         novoT.innerHTML = `Moziila é legal, ${meuNome}`
     }
 }
 nomeP.onclick = function (){
    setNPNT();
 }

 if (!localStorage.getItem('name')){
     setNPNT();
 }else {
     let storageName = localStorage.setItem('name');
     novoT.innerHTML = 'Mozilla e maneiro, ' + storageName;
 }

 function x(){
     console.log("Caiu na funcao")
 }
var nun = 1;

 if (!nun > 0){
     x();
 }else {
     console.log("Nao caiu na funcao");
 }

 //ft.push / unshift = ADICIONA
//ft.pop / shift = REMOVE


let menuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector("nav");
let input = document.querySelector("input");
let botao = document.querySelector("button");
let h2 = document.querySelector("h2");
// o que está entre () é um parametro de hmtl

function mostrarMenu(){
    //JEITO 1
   //nav.classList.add("visivel");

   //JEITO2
    // if(nav.classList.contains("visivel")){
    //     nav.classList.remove("visivel");
    // }else{
    //     nav.classList.add("visivel");
    // }
    //adiciona e remove o sisivel no console do css assim que se clica na nav

    //JEITO3
    //nav.style.display = "block";
    //consegue acessar todos os elemento de css

    nav.classList.toggle("visivel");
    menuHamburguer.classList.toggle("ativo");
}

function pegarNome(){
    let nome = input.value;
    // pega o valor do que esta dentro da caixa
    h2.innerHTML = `Seja Bem-vindo(a) ${nome}`;
    input.value = "";
}

menuHamburguer.onclick = mostrarMenu;
botao.onclick = pegarNome; 

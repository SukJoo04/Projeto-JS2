// LIMPEZA E VALIDAÇÃO

const email="   email@email.com    ";
//trim- remove os espaços início e fim
const emailLimpo= email.trim();
console.log(email)

//VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("Email válido")
}else{
    console.log("Email inválido")
}

//TRANSFORMAÇÃO DE TEXTO

const tituloArtigo="Como aprender JAVA RAIZ";
//Método upper(maiúsculo) e low(minúsculo)
const texto1 = tituloArtigo.toUpperCase();
console.log(texto1)
//split - transforma o texto em array
const texto2= tituloArtigo.split(" ");
console.log(texto2)
//join- junta tudo em uma única string
const texto3 = texto2.join(" ");
console.log(texto3)
// Método toFixed


const precoProduto=199.99;
const desconto=0.15; //15%
const precoFinal = precoProduto * (1-desconto);
console.log(precoFinal);
//``- template strings - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`);


//DOM (Document object model)

const Título=document.getElementById("título")

Título.innerText= "O DOM Mudou o Texto";
Título.style.colo="blue";
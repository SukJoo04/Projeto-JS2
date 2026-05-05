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

Título.style.color="blue";

// CRIANDO O APP
const produtos =[
    {nome:"Teclado Mecânico",preco:300,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor Gamer",preco:1300,emPromocao:true},
    {nome:"Pad Mouse XL",preco:400,emPromocao:false},
];

const container =document.getElementById("listar-produtos");
const mostrarTotal =document.getElementById("resultado-total");

// Map: transforma o attay de objetos em um arry de string html e css

function todosProdutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos = lista.map(item => `<div class="card">
        <h3>${item.nome}</h3>
        <p>Preço: R$ ${item.preco}</p>
        ${item.emPromocao ? '<span class="tag">Promoção</span>':''}
        </div>
    `).join(''); //transforma o array em uma única string

    container.innerHTML=htmlProdutos;
}

// FILTER- cria uma nova lista apenas com o que selecionou

function filtrarPromocoes(){
    const promocionais= produtos.filter(item =>item.emPromocao);
    todosProdutos(promocionais);
}

// REDUCE- Reduz o array a um único valor(soma dos preços)

function calcularTotal(){
    const total =produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText= `Valor Total R$ ${total}`;
}
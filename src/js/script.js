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
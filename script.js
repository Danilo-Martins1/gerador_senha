
let sliderelement = document.querySelector("#slider");
let buttonelement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passoword = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789!@#$%-=*+";
let novasenha = "";

sizePassword.innerHTML = sliderelement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//gerar senha e mostrar o oculto
function generatePassword(){
    
    let pass = "";
    
    for(let i = 0, n = charset.length; i < sliderelement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()* n));
    }
    
    containerPassword.classList.remove("hide");
    passoword.innerHTML = pass;
    novaSenha = pass;
}
// função para copiar senha 
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
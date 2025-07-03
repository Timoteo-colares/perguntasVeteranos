function mostrarPergunta(tipo){
    let pergunta = ""
    if (tipo == "soft"){
        pergunta = "Me conte sobre um problema inesperado que você resolveu. Qual foi sua abordagem?"
    } else if(tipo == "hard"){
        pergunta = "Quais linguagens de programação você domina? Pode citar um projeto em que usou cada uma?"
    } else {
        alert("Opção invaílida")
         
    }
    document.getElementById("pergunta").textContent ="?"+ pergunta
    const resposta = prompt(pergunta)
    //verifica se o usuario digitou alguma coisa
    if (resposta != null){
        document.getElementById("resposta").textContent = resposta
    
    }else{
        document .getElementById("resposta").textContent = "nenhuma resposta fornecida"
        
        }
        
}
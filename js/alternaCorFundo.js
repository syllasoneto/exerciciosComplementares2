// Faça um comentário de uma linha no JavaScript no exercicio anterior

//Função para alternar a cor do fundo de tela para VERDE
function alternaCorFundoVerde() {
    vBody = document.getElementById("eBody");
    vBody.style = "background-color: green;";
}

//Função para alternar a cor do fundo de tela para VERMELHO
function alternaCorFundoVermelho() {
    vBody = document.getElementById("eBody");

    //De acordo como MozillaDev posso alterar a cor de fundo utilizando o atributo style do elemento body
    vBody.style = "background-color: red;";
}

// Faça um comentário de várias linhas – bloco de texto – no JavaScript no exercicio anterior

/* Função genérica para alternar a cor de fundo
conforme o parâmetro informado na chamada
da função */

function alternaCorFundo(pCor) {
    vBody = document.getElementById("eBody");

    if(pCor=="verde") {
        vBody.style = "background-color: green;";
    } else if(pCor=="vermelho") {
        vBody.style = "background-color: red;";
    } else {
        vBody.style = "background-color: white";
    }
    
}

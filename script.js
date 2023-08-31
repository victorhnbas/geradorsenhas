var btngerar = document.getElementById("gerar");
var inputsenha = document.getElementById("senha");

var conteudo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var tamanhosenha = 10;

btngerar.addEventListener("click", () => {
    var senha = gerarsenha(tamanhosenha);
    inputsenha.value = senha;
});

function gerarsenha(length) {
    var senha = "";
    for (let i = 0; i < length; i++) {
        var alea = Math.floor(Math.random() * conteudo.length);
        senha += conteudo.charAt(alea);
    }
    return senha;
}

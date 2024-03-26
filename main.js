const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")

for (let i= 0;i <botoes.length;i++){
    botoes[i].onclik = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classlist.remover("ativo");
            textos[j].classlist.remover("ativo");
        }

        botoes[i].classlist.add("ativo");
    }
    console.long();
}
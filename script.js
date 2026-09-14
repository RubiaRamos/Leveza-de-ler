const campoPesquisa = document.getElementById("campoPesquisa");
const limparPesquisa = document.getElementById("limparPesquisa");
const livros = document.querySelectorAll(".conjunto");
const semResultados = document.querySelector(".sem-resultados");

campoPesquisa.addEventListener("input", function(){
    const pesquisa = campoPesquisa.value.toLowerCase().trim();
    let encontrou = false;

    livros.forEach(function(livro){
        const nome = livro.querySelector("p").textContent.toLowerCase();

        if(nome.includes(pesquisa)){
            livro.style.display = "block";
            encontrou = true;
        }else{
            livro.style.display = "none";
        }
    });

    semResultados.style.display = encontrou ? "none" : "block";
});

limparPesquisa.addEventListener("click", function(){
    campoPesquisa.value = "";

    livros.forEach(function(livro){
        livro.style.display = "block";
    });

    semResultados.style.display = "none";
});
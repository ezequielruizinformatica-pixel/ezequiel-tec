console.log("SCRIPT CARREGANDO");
document.addEventListener("DOMContentLoaded", function () {

    const inicio = document.getElementById("inicio");
    const aluno = document.getElementById("aluno");
    const visitante = document.getElementById("visitante");

    window.mostrarAluno = function () {
        inicio.classList.add("escondido");
        visitante.classList.add("escondido");
        aluno.classList.remove("escondido");
    }

    window.mostrarVisitante = function () {
        inicio.classList.add("escondido");
        aluno.classList.add("escondido");
        visitante.classList.remove("escondido");
    }

    window.voltar = function () {
        aluno.classList.add("escondido");
        visitante.classList.add("escondido");
        inicio.classList.remove("escondido");
    }

});

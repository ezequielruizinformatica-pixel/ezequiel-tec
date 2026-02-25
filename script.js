function mostrarAluno() {
    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("visitante").classList.add("escondido");
    document.getElementById("aluno").classList.remove("escondido");
}

function mostrarVisitante() {
    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("aluno").classList.add("escondido");
    document.getElementById("visitante").classList.remove("escondido");
}

function voltar() {
    document.getElementById("aluno").classList.add("escondido");
    document.getElementById("visitante").classList.add("escondido");
    document.getElementById("inicio").classList.remove("escondido");
}

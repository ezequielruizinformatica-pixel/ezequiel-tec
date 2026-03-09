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

function mostrarMapa(titulo, imagem) {
    document.getElementById("visitante").classList.add("escondido");
    document.getElementById("mapa").classList.remove("escondido");

    document.getElementById("titulo-mapa").innerText = titulo;
    document.getElementById("imagem-mapa").src = imagem;
}

function irParaMateria() {
    document.getElementById("aluno").classList.add("escondido");
    document.getElementById("materia").classList.remove("escondido");
}

function voltarParaAluno() {
    document.getElementById("materia").classList.add("escondido");
    document.getElementById("aluno").classList.remove("escondido");
}

function irParaTurno() {
    document.getElementById("materia").classList.add("escondido");
    document.getElementById("turno").classList.remove("escondido");
}

function voltarParaMateria() {
    document.getElementById("turno").classList.add("escondido");
    document.getElementById("materia").classList.remove("escondido");
}

function irParaProfessor() {
    document.getElementById("turno").classList.add("escondido");
    document.getElementById("professor").classList.remove("escondido");
}
function voltarParaVisitante() {
    document.getElementById("mapa").classList.add("escondido");
    document.getElementById("visitante").classList.remove("escondido");
}

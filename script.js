function esconderTodas() {
    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("aluno").classList.add("escondido");
    document.getElementById("materia").classList.add("escondido");
    document.getElementById("turno").classList.add("escondido");
    document.getElementById("professor").classList.add("escondido");
    document.getElementById("visitante").classList.add("escondido");
    document.getElementById("mapa").classList.add("escondido");
}

function mostrarAluno() {
    esconderTodas();
    document.getElementById("aluno").classList.remove("escondido");
}

function mostrarVisitante() {
    esconderTodas();
    document.getElementById("visitante").classList.remove("escondido");
}

function voltar() {
    esconderTodas();
    document.getElementById("inicio").classList.remove("escondido");
}

function mostrarMapa(titulo, imagem) {
    esconderTodas();
    document.getElementById("mapa").classList.remove("escondido");

    document.getElementById("titulo-mapa").innerText = titulo;
    document.getElementById("imagem-mapa").src = imagem;
}

function voltarParaVisitante() {
    esconderTodas();
    document.getElementById("visitante").classList.remove("escondido");
}

function irParaMateria() {
    esconderTodas();
    document.getElementById("materia").classList.remove("escondido");
}

function voltarParaAluno() {
    esconderTodas();
    document.getElementById("aluno").classList.remove("escondido");
}

function irParaTurno() {
    esconderTodas();
    document.getElementById("turno").classList.remove("escondido");
}

function voltarParaMateria() {
    esconderTodas();
    document.getElementById("materia").classList.remove("escondido");
}

function irParaProfessor(turno) {

    esconderTodas();

    const telaProfessor = document.getElementById("professor");
    const matutino = document.getElementById("professores-matutino");
    const vespertino = document.getElementById("professores-vespertino");

    telaProfessor.classList.remove("escondido");

    // esconder os dois
    matutino.classList.add("escondido");
    vespertino.classList.add("escondido");

    // mostrar apenas o escolhido
    if (turno === "matutino") {
        matutino.classList.remove("escondido");
    }

    if (turno === "vespertino") {
        vespertino.classList.remove("escondido");
    }
}
function voltarParaTurno() {
    esconderTodas();
    document.getElementById("turno").classList.remove("escondido");
}

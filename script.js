function mostrarAluno() {
  trocarTela("inicio", "aluno");
}

function mostrarVisitante() {
  trocarTela("inicio", "visitante");
}

function voltar() {
  trocarTela("aluno", "inicio");
  trocarTela("visitante", "inicio");
}

function trocarTela(sair, entrar) {
  document.getElementById(sair).classList.add("escondido");
  document.getElementById(entrar).classList.remove("escondido");
}

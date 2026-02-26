function mostrarTela(telaId) {
    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("aluno").classList.add("escondido");
    document.getElementById("visitante").classList.add("escondido");

    document.getElementById(telaId).classList.remove("escondido");
}

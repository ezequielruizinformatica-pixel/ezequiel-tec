function mostrarAluno() {
  trocarTela("inicio", "aluno");
}

function mostrarVisitante() {
  trocarTela("inicio", "visitante");
}

function voltar() {
  document.getElementById("aluno").classList.add("escondido");
  document.getElementById("visitante").classList.add("escondido");
  document.getElementById("inicio").classList.remove("escondido");
}

function trocarTela(sair, entrar) {
  document.getElementById(sair).classList.add("escondido");
  document.getElementById(entrar).classList.remove("escondido");
}

function voltarAutomatico() {
  setTimeout(() => {
    document.getElementById("aluno").classList.add("escondido");
    document.getElementById("visitante").classList.add("escondido");
    document.getElementById("inicio").classList.remove("escondido");
  }, 5000);
}

let stream;
  console.log("Gerando QR...");
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), dado);
}

function mostrarAluno() {
  trocarTela("inicio", "aluno");
}

function mostrarVisitante() {
  trocarTela("inicio", "visitante");
}

function voltar() {
  document.getElementById("aluno").classList.add("escondido");
  document.getElementById("visitante").classList.add("escondido");
  document.getElementById("foto").classList.add("escondido");
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

function abrirFoto() {
  trocarTela("inicio", "foto");

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(s => {
      stream = s;
      document.getElementById("camera").srcObject = stream;
    });
}

function capturar() {
  const video = document.getElementById("camera");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0);

  const imagem = canvas.toDataURL("image/png");
  document.getElementById("preview").src = imagem;

  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }

  gerarQR(imagem);
}

function gerarQR(dado) {
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), dado);
}

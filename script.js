document.addEventListener("DOMContentLoaded", function () {

    const tipo = document.getElementById("tipo");
    const nome = document.getElementById("nome");
    const botao = document.getElementById("btnEnviar");

    botao.addEventListener("click", function () {

        if (!tipo.value || !nome.value) {
            alert("Preencha todas as informações.");
            return;
        }

        const dados = {
            tipo: tipo.value,
            nome: nome.value
        };

        console.log("Dados enviados:", dados);

        alert("Cadastro realizado com sucesso!");

        // Limpa os campos
        tipo.value = "";
        nome.value = "";
    });

});

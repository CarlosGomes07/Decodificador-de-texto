function copiarTexto() {
    // Seleciona o elemento com a classe "texto-criptografado" e a tag "p"
    let textoCopiado = document.querySelector(".texto-criptografado p");

    // Seleciona o botão com o id "copiar"
    var btnCopy = document.querySelector("#copiar");

    // Adiciona um evento de clique ao botão
    btnCopy.addEventListener("click", function () {
        // Tenta copiar o texto para a área de transferência
        navigator.clipboard.writeText(textoCopiado.innerText)
            .then(function () {
                // Se a cópia for bem-sucedida, exibe um alerta e recarrega a página
                alert("Texto copiado com sucesso!");
                location.reload();
            })
            .catch(function (err) {
                // Se houver um erro ao copiar, exibe uma mensagem de erro
                console.error('Erro ao copiar o texto: ', err);
                alert("Erro ao copiar o texto. Por favor, copie manualmente.");
            });
    });
}

// Chama a função para configurar o evento de clique
copiarTexto();
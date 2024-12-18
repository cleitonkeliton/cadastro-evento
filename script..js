document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Validação dos campos obrigatórios
    const nome = document.getElementById("nome").value.trim();
    const nomePais = document.getElementById("nomePais").value.trim();
    const telefonePais1 = document.getElementById("telefonePais1").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const bairro = document.getElementById("bairro").value.trim();
    const cidade = document.getElementById("cidade").value.trim();

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome || !nomePais || !telefonePais1 || !endereco || !bairro || !cidade) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Validação de telefone
    if (!/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefonePais1)) {
      alert("Digite um telefone válido no formato (99) 99999-9999.");
      return;
    }

    // Exibe uma mensagem de sucesso
    alert("Formulário enviado com sucesso!");

    // Envia o formulário
    form.submit();
  });
});

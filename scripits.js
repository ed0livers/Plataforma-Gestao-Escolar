// Função de validação do formulário
function validateForm() {
  const matricula = document.getElementById('matricula').value;
  const senha = document.getElementById('senha').value;
  const feedback = document.getElementById('feedback');

  // Simulação de validação (substitua pela lógica real)
  if (matricula !== "12345" || senha !== "senha123") {
      feedback.textContent = "Matrícula ou senha incorretas.";
      return false; // Impede o envio do formulário
  }
  feedback.textContent = ""; // Limpa mensagem de feedback
  return true; // Permite o envio do formulário
}

// Adiciona uma animação ao botão ao clicar
document.querySelector('.button').addEventListener('click', function() {
  this.classList.add('loading');
  setTimeout(() => {
      this.classList.remove('loading');
  }, 2000); // Dura 2 segundos para simular um carregamento
});

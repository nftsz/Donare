// Seleciona todos os botões com as classes .sign_in ou .sign_up e adiciona um 
// ouvinte de clique em cada um pra sempre que um desses botões for clicado:
// - reseta o estado do formulário.
// - exibe a popup de autenticação.
// - se o botão clicado for o de cadastro, chama a função e alterna para o formulário de cadastro.
document.querySelectorAll('.sign_in, .sign_up').forEach(button => {
  button.addEventListener('click', () => {
    resetFormState();
    document.getElementById('authModal').style.display = 'block';
    if(button.classList.contains('sign_up')) {
      toggleToSignup();
    }
  });
});

// Verifica se os campos de cadastro estão visíveis. Se tiver, chama a função pra resetar o formulario
function resetFormState() {
  const signupFields = document.querySelector('.signup-fields');
  if(signupFields.style.display === 'block') {
    toggleToSignup();
  }
}

document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('authModal').style.display = 'none';
});

document.getElementById('toggleSignup').addEventListener('click', (e) => {
  e.preventDefault();
  toggleToSignup();
});

function toggleToSignup() {
  const signupFields = document.querySelector('.signup-fields');
  const isSignup = signupFields.style.display === 'block';
  
  signupFields.style.display = isSignup ? 'none' : 'block';
  document.getElementById('formTitle').textContent = isSignup ? 'Entrar' : 'Criar conta';
  document.getElementById('submitBtn').textContent = isSignup ? 'Entrar' : 'Cadastrar';
  document.getElementById('toggleSignup').innerHTML = isSignup 
    ? 'Não tem conta? <a href="#">Crie uma</a>' 
    : 'Já tem conta? <a href="#">Entrar</a>';
}

document.getElementById('authForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita o comportamento padrão do formulário
  

  // Redireciona para home.html após 1 segundo (simulando processamento)
  setTimeout(() => {
      window.location.href = 'home.html';
  }, 1000);
  

  document.getElementById('submitBtn').textContent = 'Redirecionando...';
});


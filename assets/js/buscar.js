const buscarInit = () => {
  const botao = document.querySelector("[data-buscarBotao]");
  const campo = document.querySelector(".cabecalho__campo-busca");
  const input = document.querySelector(".cabecalho__campo-busca > input");

  botao.addEventListener('click', () => {
    campo.classList.toggle('ativo');
  })
  
  input.addEventListener('blur', () => {
    campo.classList.remove('ativo');
  })
  
};

export default buscarInit;

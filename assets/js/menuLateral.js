const menuLateralInit = () => {
  const botao = document.querySelector("[data-hamburguer]");
  const menuLateral = document.querySelector("[data-menuLateral]");
  
  botao.addEventListener("click", () => {
    menuLateral.classList.toggle("ativo");
  });
  
  window.addEventListener("click", (e) => {
    if (
      menuLateral.classList.contains("ativo") &&
      !menuLateral.contains(e.target) &&
      !botao.contains(e.target)
    ) {
      menuLateral.classList.remove("ativo");
    }
  });
};

export default menuLateralInit;

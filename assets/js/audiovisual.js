const audiovisualInit = () => {
  const options = document.querySelectorAll("[data-option]");
  const imagem = document.querySelector("[data-exibirMidia");

  options.forEach(option => {
    option.addEventListener('click', (e) => {
      const targetName = e.target.dataset.option;
      imagem.setAttribute("src", `assets/img/midias-diversas-${targetName}.png`);
      clearOptions();
      e.target.classList.add("ativo");
    })
  })

  function clearOptions() {
    options.forEach((option) => {
      option.classList.remove("ativo");
    });
  }
};

export default audiovisualInit;

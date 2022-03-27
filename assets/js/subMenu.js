const submenuInit = () => {
  const releases = document.querySelector('[data-releases]');
  const submenu = document.querySelector('[data-submenu]')
  const header = document.querySelector(".cabecalho");

  releases.addEventListener('mouseenter', () => {
    submenu.classList.add('ativo');
  })

  submenu.addEventListener("mouseleave", () => {
    submenu.classList.remove("ativo");
  });

  header.addEventListener("mouseleave", () => {
    submenu.classList.remove("ativo");
  });
};

export default submenuInit;

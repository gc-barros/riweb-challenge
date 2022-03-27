const carrosselInit = () => {
  const botaoLeft = document.querySelector(".carrossel__botao--left");
  const botaoRight = document.querySelector(".carrossel__botao--right");
  const cardsList = document.querySelectorAll("[data-card]");
  const firstCard = cardsList[0];
  const width = firstCard.offsetWidth;
  let marginLeft = 0;
  let count = 1;

  botaoRight.addEventListener('click', () => {
    if (count <= cardsList.length - 1) {
      marginLeft += width;
      firstCard.style.marginLeft = -marginLeft -(36*count) + "px";
      count++;
    } 
  })

  botaoLeft.addEventListener("click", () => {
    if (marginLeft > 0) {
      marginLeft -= width;
      firstCard.style.marginLeft = -marginLeft + "px";
      count--;
    }
  });

};

export default carrosselInit;

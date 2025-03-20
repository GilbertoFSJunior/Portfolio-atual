document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.querySelector(".carrossel");
  const carrosselItems = document.querySelectorAll(".carrossel-item");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  let currentIndex = 0;

  function updateCarrossel() {
    const itemWidth = carrosselItems[0].clientWidth;
    carrossel.style.transform = `translateX(${
      -currentIndex * (itemWidth + 20)
    }px)`;
  }

  leftArrow.addEventListener("click", () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : carrosselItems.length - 1;
    updateCarrossel();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex =
      currentIndex < carrosselItems.length - 1 ? currentIndex + 1 : 0;
    updateCarrossel();
  });

  window.addEventListener("resize", updateCarrossel);
});

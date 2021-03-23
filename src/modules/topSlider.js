const topSlider = () => {
  const topSliders = document.querySelector('.top-slider');
  const item = document.querySelectorAll('.item');
  const table = item.querySelectorAll('.table');

  let currentSlide = 0;

  const autoPlaySlide = () => {
    table[currentSlide].classList.remove('table-active');
    currentSlide++;
    table[currentSlide].classList.add('table-active');
  };

  const startSlide = () => {
    setInterval(autoPlaySlide, 2000);
  };
  startSlide();

};

export default topSlider;

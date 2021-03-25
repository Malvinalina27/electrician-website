const topSlider = () => {
  const slider = document.querySelector('.top-slider');
  const slides = document.querySelectorAll('.item');
  const table = document.querySelectorAll('.table');
  const slickDots = document.querySelector('.slick-dots');
  let dot = document.querySelectorAll('.slick');

  //создание дотсов
  /*  const getListContent = () => {
    const result = [];

    for (let i = 0; i < item.length; i++) {
      const li = document.createElement('li');
      if (li === item.length) {
        li.className = 'slick slick-active';
      }
      result.push(li);
    }
    return result;
  };

  slickDots.append(...getListContent());
  const dot = document.querySelectorAll('.slick'); */

  //создание слайдов
  let index = 0;

  const activeSlide = n => {
    slides.forEach(elem => {
      elem.classList.remove('item-active');
    });
    slides[n].classList.add('item-active');
  };
  const activeDot = n => {
    for (dot of slickDots) {
      dot.classList.remove('item-active');
    }
    slickDots[n].classList.add('item-active');
  };

  const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
  };

  const nextSlide = () => {
    if (index === slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };
  const prevSlide = () => {
    if (index === 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  };

  dot.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  window.setInterval(nextSlide, 3000);

};

export default topSlider;

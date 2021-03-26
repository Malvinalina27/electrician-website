const topSlider = () => {
  const slider = document.querySelector('.top-slider');
  const slide = document.querySelectorAll('.item');
  const table = document.querySelectorAll('.table');
  const slickDots = document.querySelector('.slick-dots');

  //создание дотсов
  const getListContent = () => {
    const result = [];

    for (let i = 0; i < slide.length; i++) {
      const li = document.createElement('li');
      li.className = 'slick';
      if (li === slide.length) {
        li.className = 'slick slick-active';
      }
      result.push(li);
    }
    return result;
  };

  slickDots.append(...getListContent());
  const dot = document.querySelectorAll('.slick');


  //создание слайдов
  let currentSlide = 0;
  let interval;
  //следующий слайдер
  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
    elem[index].classList.remove(strClass);
  };
  //предыдущий слайдер
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
    elem[index].classList.add(strClass);
  };
  //автоплей
  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(table, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'item-active');
    nextSlide(table, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');
  };
  // запускает слайд
  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  // останавливает слайд
  const stopSlide = () => {
    clearInterval(interval);
  };
  //переключение слайда по нажатию на дот
  slider.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;

    if (!target.matches('.slick')) {
      return;
    }
    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(table, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');

    if (target.matches('.slick')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    nextSlide(slide, currentSlide, 'item-active');
    nextSlide(table, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');
  });

  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.slick')) {
      stopSlide();
    }
  });
  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.slick')) {
      startSlide();
    }
  });

  startSlide(3000);

};

export default topSlider;

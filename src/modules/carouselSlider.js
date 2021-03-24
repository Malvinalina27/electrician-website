class CarouselSlider {
  constructor({ main, wrap, next, prev, infinity = false, position = 0, slidesToShow  = 3, responsive = [] }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      widthSlide: Math.floor(100 / this.slidesToShow), //сколько места занимает слайдер
      infinity, //перелистывание слайдов к началу
      maxPosition: this.slides.length - this.slidesToShow,
    };
    this.responsive = responsive;
  }

  // инициализация
  init() {
    this.addGloClass();
    this.addStyle();
    this.controlSlider();
    if (this.responsive) {
      this.responseInit();
    }
  }

  // добавление классов
  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }
  // добавляем стили к своим классам
  addStyle() {
    let style = document.getElementById('sliderCarousel-style');
    //создаем элемент только если его нет
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }
    style.textContent = `
      .glo-slider {
        overflow: hidden !important;
      }
      .glo-slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }
      .glo-slider__item {
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: auto 0 !important;
      }
    `;
    document.head.appendChild(style);
  }
  // нажатие на стрелки
  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }
  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition; // переходит к послденему слайду
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }
  nextSlider() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0; // переходит к первому слайду
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow; //чтобы кол-во слайдеров сохранялось при изменении экрана
    const allResponse = this.responsive.map(item => item.breakpoint); //ширина экрана в responsive
    const maxResponse = Math.max(...allResponse);
    //проверка ширины экрана
    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };
    checkResponse();

    window.addEventListener('resize', checkResponse);
  }

}

// передаю опции в конструктор
const options = {
  main: '.services-elements',
  wrap: '.services-carousel',
  prev: '.arrow-left',
  next: '.arrow-right',
  slidesToShow: 3,
  infinity: true,
  responsive: [{
    breakpoint: 1024,
    slidesToShow: 2,
  },
  {
    breakpoint: 576,
    slidesToShow: 1,
  },
  ]
};

const carousel = new CarouselSlider(options);

export default carousel;

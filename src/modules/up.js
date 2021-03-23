const up = () => {
  const upBtn = document.querySelector('.up');
  const push100 = document.querySelector('.push100');

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      upBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      upBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -30);
      setTimeout(backToTop, 0);
    }
  }

  window.addEventListener('scroll', () => {
    upBtn.hidden = (pageYOffset < push100.scrollHeight);
  });

  window.addEventListener('scroll', trackScroll);
  upBtn.addEventListener('click', backToTop);
};

export default up;

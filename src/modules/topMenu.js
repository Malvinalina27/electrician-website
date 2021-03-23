const topMenu = () => {
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');
  const mobileMenu = document.querySelector('.mobile-menu');

  // для мобильной версии
  const  handlerMenu = () => {
    mobileMenu.classList.toggle('open');
  };

  // вызов модального окна по кнопке "заказать звонок"
  document.body.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('callback-btn') || target.classList.contains('button-services')) {
      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';
      handlerMenu();
    }
    if (target.closest('.modal-close')) {
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
    if (target.classList.contains('modal-overlay')) {
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
    // вызов и обработка мобильного меню
    if (!target.closest('.mobile-menu') && mobileMenu.classList.contains('open')) {
      handlerMenu();
    }
    if (target.closest('.mob-menu-btn')) {
      handlerMenu();
    }
    if (target.closest('li>a')) {
      handlerMenu();
    }
    if (target.classList.contains('close')) {
      handlerMenu();
    }
  });

  // плавная прокрутка к якорям
  const links = document.querySelectorAll('.top-menu');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', e => {
      e.preventDefault();

      const  blockID = e.target.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

};

export default topMenu;

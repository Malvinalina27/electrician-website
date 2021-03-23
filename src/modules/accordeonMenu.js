const accordeonMenu = () => {
  const accordeon = document.querySelector('.accordeon');
  const element = accordeon.querySelectorAll('.element ');
  const elementContent = accordeon.querySelectorAll('.element-content');

  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', () => {
      for (let j = 0; j < elementContent.length; j++) {
        elementContent[j].style.display = 'none';
        element[j].classList.remove('active');
      }
      elementContent[i].style.display = 'block';
      element[i].classList.toggle('active');
    });
  }
};


export default accordeonMenu;

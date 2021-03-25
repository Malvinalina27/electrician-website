const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const statusMessage = document.createElement('div');
  statusMessage.classList.add('visible');
  statusMessage.style.cssText = 'font-size: 2 rem; color: #000;';

  // ajax
  const postData = body =>
    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });

  // заполнение формы
  document.addEventListener('submit', e => {
    e.preventDefault();

    const target = e.target;
    target.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;

    let name = target.querySelectorAll('[name="fio"]');
    let phone = target.querySelectorAll('[name="tel"]');

    const formData = new FormData(target);
    const body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;
        setTimeout(() => {
          name.forEach(item => {
            item.value = '';
          });
          phone.forEach(item => {
            item.value = '';
          });
          document.querySelector('.modal-callback').style = 'display:none;';
          document.querySelector('.modal-overlay').style = 'display:none;';
          target.removeChild(statusMessage);
        }, 3000);
      })

      .catch(error => {
        statusMessage.textContent = errorMessage;
        console.error(error);
        setTimeout(() => {
          name.forEach(item => {
            item.value = '';
          });
          phone.forEach(item => {
            item.value = '';
          });
          target.removeChild(statusMessage);
        }, 3000);
      });

  });

};

export default sendForm;


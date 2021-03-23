const callbackBtn = () => {
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');

  document.body.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('callback-btn')) {
      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';
    }
    if (target.closest('.modal-close')) {
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
    if (target.classList.contains('modal-overlay')) {
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  });

};

export default callbackBtn;

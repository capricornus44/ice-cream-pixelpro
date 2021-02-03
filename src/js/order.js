(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-order-open]'),
    openModalBtnMobile: document.querySelector('[data-order-open-mobile]'),
    closeModalBtn: document.querySelector('[data-order-close]'),
    // closeModalTouch: document.querySelector('[data-touch-close]'),
    modal: document.querySelector('[data-order-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMobile.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalTouch.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

document.getElementById('menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});


const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
  modal.classList.add('fade-in');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('fade-in');
  modal.classList.add('fade-out');
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('fade-out');
  }, 500); // Change 500 to match animation duration
});
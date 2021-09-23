const modalBtn = document.querySelectorAll('.more');
const modalWindow = document.querySelector('.modal');

modalBtn.forEach(item => {
    item.addEventListener('click', () => {
        modalWindow.classList.remove('hidden');
    });
});

modalWindow.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modalWindow.classList.add('hidden');
    }
});
const accordion = document.getElementById('accordion');
const items = accordion.querySelectorAll('.accordion-item');

items.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        item.classList.toggle('open');
        body.style.maxHeight = isOpen ? null : `${body.scrollHeight}px`;
    });
});

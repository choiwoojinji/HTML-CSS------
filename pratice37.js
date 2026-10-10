const items = document.querySelectorAll('.accordion-item');

items.forEach((item) => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        items.forEach((other) => other.classList.remove('open'));

        if (!isOpen) {
            item.classList.add('open');
        }
    });
});

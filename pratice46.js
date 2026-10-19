const accordion = document.getElementById('accordion');
const items = Array.from(accordion.querySelectorAll('.accordion-item'));

accordion.addEventListener('click', (event) => {
    const header = event.target.closest('.accordion-header');
    if (!header) return;

    const clickedItem = header.closest('.accordion-item');

    items.forEach((item) => {
        if (item !== clickedItem) item.classList.remove('active');
    });

    clickedItem.classList.toggle('active');
});

const dropdown = document.getElementById('dropdown');
const toggle = document.getElementById('dropdownToggle');
const menu = document.getElementById('dropdownMenu');
const label = document.getElementById('dropdownLabel');
const items = Array.from(menu.querySelectorAll('.dropdown-item'));

toggle.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

menu.addEventListener('click', (event) => {
    const item = event.target.closest('.dropdown-item');
    if (!item) return;

    items.forEach((el) => el.classList.remove('selected'));
    item.classList.add('selected');
    label.textContent = item.textContent;
    dropdown.classList.remove('open');
});

document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
    }
});

const list = document.getElementById('sortableList');
const status = document.getElementById('status');

let draggingItem = null;

list.addEventListener('dragstart', (e) => {
    draggingItem = e.target;
    draggingItem.classList.add('dragging');
});

list.addEventListener('dragend', () => {
    draggingItem.classList.remove('dragging');
    draggingItem = null;
    status.textContent = '순서가 변경되었습니다';
});

list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const target = e.target.closest('.item');
    if (!target || target === draggingItem) return;

    const rect = target.getBoundingClientRect();
    const isAfter = e.clientY - rect.top > rect.height / 2;

    list.querySelectorAll('.item').forEach((item) => item.classList.remove('drag-over'));
    target.classList.add('drag-over');

    if (isAfter) {
        target.after(draggingItem);
    } else {
        target.before(draggingItem);
    }
});

list.addEventListener('drop', (e) => {
    e.preventDefault();
    list.querySelectorAll('.item').forEach((item) => item.classList.remove('drag-over'));
});

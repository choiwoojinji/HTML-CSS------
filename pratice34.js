const columns = document.querySelectorAll('.column');

let draggedCard = null;

document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('dragstart', () => {
        draggedCard = card;
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        draggedCard = null;
    });
});

columns.forEach((column) => {
    column.addEventListener('dragover', (event) => {
        event.preventDefault();
        column.classList.add('drag-over');
    });

    column.addEventListener('dragleave', () => {
        column.classList.remove('drag-over');
    });

    column.addEventListener('drop', () => {
        column.classList.remove('drag-over');
        if (draggedCard) {
            column.appendChild(draggedCard);
        }
    });
});

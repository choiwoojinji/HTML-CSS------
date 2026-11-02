const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoEmpty = document.getElementById('todoEmpty');

function updateEmptyMessage() {
    const hasItems = todoList.children.length > 0;
    todoEmpty.classList.toggle('hidden', hasItems);
}

function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;
    span.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '삭제';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateEmptyMessage();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = todoInput.value.trim();
    if (!text) return;

    todoList.appendChild(createTodoItem(text));
    todoInput.value = '';
    todoInput.focus();
    updateEmptyMessage();
});

updateEmptyMessage();

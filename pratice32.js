const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');

function updateCount() {
    const total = todoList.children.length;
    todoCount.textContent = `할 일 ${total}개`;
}

function addTodo(text) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;
    span.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-delete';
    deleteBtn.textContent = '✕';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateCount();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    updateCount();
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = todoInput.value.trim();
    if (!text) {
        return;
    }

    addTodo(text);
    todoInput.value = '';
    todoInput.focus();
});

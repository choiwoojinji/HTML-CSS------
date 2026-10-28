const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoSummary = document.getElementById('todoSummary');

let todos = [];

function updateSummary() {
    const remaining = todos.filter((todo) => !todo.done).length;
    todoSummary.textContent = `할 일 ${remaining}개 남음`;
}

function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach((todo) => {
        const item = document.createElement('li');
        item.className = 'todo-item' + (todo.done ? ' done' : '');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.done;
        checkbox.addEventListener('change', () => {
            todo.done = checkbox.checked;
            renderTodos();
        });

        const text = document.createElement('span');
        text.className = 'todo-text';
        text.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '삭제';
        deleteBtn.addEventListener('click', () => {
            todos = todos.filter((t) => t.id !== todo.id);
            renderTodos();
        });

        item.append(checkbox, text, deleteBtn);
        todoList.appendChild(item);
    });

    updateSummary();
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = todoInput.value.trim();
    if (text.length === 0) return;

    todos.push({ id: Date.now(), text, done: false });
    todoInput.value = '';
    renderTodos();
});

renderTodos();

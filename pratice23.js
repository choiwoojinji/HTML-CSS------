const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // form 제출 시 페이지가 새로고침되는 것을 막습니다

    const text = todoInput.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text; // innerHTML 대신 textContent를 써야 태그가 그대로 글자로 나옵니다

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';

    li.append(span, deleteBtn);
    todoList.append(li);

    todoInput.value = '';
    todoInput.focus();
});

// 이벤트 위임: ul 하나에만 이벤트를 걸고 클릭된 대상을 확인합니다
todoList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;

    if (e.target.classList.contains('delete-btn')) {
        li.remove();
    } else {
        li.classList.toggle('done');
    }
});

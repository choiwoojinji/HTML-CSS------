const tagList = document.getElementById('tagList');
const tagField = document.getElementById('tagField');

const tags = [];

function renderTags() {
    tagList.innerHTML = '';
    tags.forEach((text, index) => {
        const li = document.createElement('li');
        li.className = 'tag';
        li.textContent = text;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'tag-remove';
        removeBtn.type = 'button';
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', () => {
            tags.splice(index, 1);
            renderTags();
        });

        li.appendChild(removeBtn);
        tagList.appendChild(li);
    });
}

tagField.addEventListener('keydown', (event) => {
    const value = tagField.value.trim();

    if (event.key === 'Enter' && value) {
        event.preventDefault();
        if (!tags.includes(value)) {
            tags.push(value);
            renderTags();
        }
        tagField.value = '';
    }

    if (event.key === 'Backspace' && !value && tags.length) {
        tags.pop();
        renderTags();
    }
});

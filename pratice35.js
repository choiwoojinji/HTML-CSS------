const toastContainer = document.getElementById('toastContainer');

const messages = {
    success: '저장되었습니다!',
    error: '문제가 발생했습니다.',
    info: '새로운 알림이 있습니다.',
};

document.querySelectorAll('.buttons button').forEach((button) => {
    button.addEventListener('click', () => {
        const type = button.dataset.type;
        showToast(type, messages[type]);
    });
});

function showToast(type, message) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove());
    }, 2500);
}

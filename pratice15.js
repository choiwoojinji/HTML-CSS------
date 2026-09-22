const msg = document.querySelector('#msg');
const count = document.querySelector('#count');

msg.addEventListener('input', () => {
    const len = msg.value.length;
    count.textContent = `${len} / 50`;

    // 40자 넘으면 경고 색으로 표시 (남은 글자 수 얼마 안 남았다는 뜻)
    if (len >= 40) {
        count.classList.add('warn');
    } else {
        count.classList.remove('warn');
    }
});

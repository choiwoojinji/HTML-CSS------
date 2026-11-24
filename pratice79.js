const likeBtn = document.getElementById('likeBtn');
const heart = document.getElementById('heart');
const countText = document.getElementById('countText');

let liked = false;
let count = 0;

likeBtn.addEventListener('click', () => {
    liked = !liked;
    count += liked ? 1 : -1;

    heart.textContent = liked ? '❤️' : '🤍';
    countText.textContent = `${count}명이 좋아합니다`;

    likeBtn.classList.remove('liked');
    if (liked) {
        void likeBtn.offsetWidth;
        likeBtn.classList.add('liked');
    }
});

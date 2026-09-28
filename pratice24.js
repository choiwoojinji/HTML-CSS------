const progressBar = document.getElementById('progressBar');
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    // 스크롤할 수 있는 전체 길이 = 문서 높이 - 화면 높이
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (window.scrollY / scrollable) * 100;

    progressBar.style.width = percent + '%';

    // 300px 이상 내려가면 맨 위로 버튼 보이기
    topBtn.classList.toggle('show', window.scrollY > 300);
});

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

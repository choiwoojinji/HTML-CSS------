const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

for (let btn of tabBtns) {
    btn.addEventListener('click', () => {
        // 모든 버튼과 패널에서 active를 지우고
        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanels.forEach((p) => p.classList.remove('active'));

        // 클릭한 버튼과 data-target에 해당하는 패널에만 active를 붙입니다
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    });
}

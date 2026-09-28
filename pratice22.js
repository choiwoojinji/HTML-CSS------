const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

function showModal() {
    modalOverlay.classList.add('show');
}

function hideModal() {
    modalOverlay.classList.remove('show');
}

openModal.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);

// 모달 바깥(어두운 배경)을 클릭했을 때만 닫기
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        hideModal();
    }
});

// ESC 키로 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideModal();
    }
});

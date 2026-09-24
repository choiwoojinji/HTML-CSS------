const headers = document.querySelectorAll('.accordion-header');

headers.forEach((header) => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = header.classList.contains('active');

        // 다른 항목은 모두 닫고 클릭한 항목만 토글 (한 번에 하나만 열리게)
        headers.forEach((h) => {
            h.classList.remove('active');
            h.nextElementSibling.style.maxHeight = null;
        });

        if (!isOpen) {
            header.classList.add('active');
            body.style.maxHeight = `${body.scrollHeight}px`;
        }
    });
});

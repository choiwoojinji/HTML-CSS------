const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        accordionHeaders.forEach((h) => h.classList.remove('active'));
        document.querySelectorAll('.accordion-body').forEach((b) => b.classList.remove('active'));

        if (!isActive) {
            header.classList.add('active');
            body.classList.add('active');
        }
    });
});

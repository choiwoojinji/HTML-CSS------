const gallery = document.getElementById('gallery');
const thumbs = gallery.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = thumbs[currentIndex].src;
    lightboxImage.alt = thumbs[currentIndex].alt;
    lightbox.classList.add('open');
}

function closeLightbox() {
    lightbox.classList.remove('open');
}

function showOffset(offset) {
    currentIndex = (currentIndex + offset + thumbs.length) % thumbs.length;
    lightboxImage.src = thumbs[currentIndex].src;
    lightboxImage.alt = thumbs[currentIndex].alt;
}

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => openLightbox(index));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => showOffset(-1));
lightboxNext.addEventListener('click', () => showOffset(1));

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showOffset(-1);
    if (event.key === 'ArrowRight') showOffset(1);
});

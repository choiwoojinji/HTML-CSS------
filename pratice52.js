const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsWrap = document.getElementById('carouselDots');
const slideCount = track.children.length;

let currentIndex = 0;

for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
}

const dots = dotsWrap.querySelectorAll('.dot');

function render() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

function goToSlide(index) {
    currentIndex = (index + slideCount) % slideCount;
    render();
}

prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

render();

setInterval(() => goToSlide(currentIndex + 1), 3000);

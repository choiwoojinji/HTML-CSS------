const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');
const hint = document.getElementById('hint');

const getRandomColor = () => {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    return `#${hex}`;
};

const renderPalette = () => {
    palette.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();

        const swatch = document.createElement('div');
        swatch.className = 'swatch';
        swatch.style.backgroundColor = color;

        const label = document.createElement('span');
        label.textContent = color;

        swatch.appendChild(label);
        swatch.addEventListener('click', () => copyColor(swatch, label, color));

        palette.appendChild(swatch);
    }
};

const copyColor = (swatch, label, color) => {
    navigator.clipboard.writeText(color).catch(() => {});

    const original = label.textContent;
    swatch.classList.add('copied');
    label.textContent = '복사됨!';
    hint.textContent = `${color} 가 복사되었습니다.`;

    setTimeout(() => {
        swatch.classList.remove('copied');
        label.textContent = original;
    }, 800);
};

generateBtn.addEventListener('click', renderPalette);

renderPalette();

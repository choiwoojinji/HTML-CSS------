const palette = document.getElementById('palette');
const message = document.getElementById('message');
const generateBtn = document.getElementById('generateBtn');

const SWATCH_COUNT = 5;

function randomHex() {
    const value = Math.floor(Math.random() * 0xffffff);
    return `#${value.toString(16).padStart(6, '0')}`;
}

function isLightColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 160;
}

function copyToClipboard(hex) {
    navigator.clipboard.writeText(hex).then(() => {
        message.textContent = `${hex} 복사 완료!`;
    }).catch(() => {
        message.textContent = '복사에 실패했어요.';
    });
}

function createSwatch(hex) {
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = hex;
    if (isLightColor(hex)) swatch.classList.add('light');

    const label = document.createElement('span');
    label.className = 'swatch-label';
    label.textContent = hex;
    swatch.appendChild(label);

    swatch.addEventListener('click', () => copyToClipboard(hex));

    return swatch;
}

function generatePalette() {
    palette.innerHTML = '';
    message.textContent = '';

    for (let i = 0; i < SWATCH_COUNT; i += 1) {
        palette.appendChild(createSwatch(randomHex()));
    }
}

generateBtn.addEventListener('click', generatePalette);

generatePalette();

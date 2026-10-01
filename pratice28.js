const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');

function randomHex() {
    const value = Math.floor(Math.random() * 0xffffff);
    return `#${value.toString(16).padStart(6, '0')}`;
}

function renderPalette() {
    palette.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const hex = randomHex();

        const chip = document.createElement('div');
        chip.className = 'color-chip';
        chip.style.backgroundColor = hex;

        const label = document.createElement('span');
        label.textContent = hex;
        chip.appendChild(label);

        chip.addEventListener('click', () => {
            navigator.clipboard.writeText(hex);
            label.textContent = '복사됨!';
            setTimeout(() => {
                label.textContent = hex;
            }, 800);
        });

        palette.appendChild(chip);
    }
}

generateBtn.addEventListener('click', renderPalette);

renderPalette();

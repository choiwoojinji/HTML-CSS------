const passwordInput = document.getElementById('passwordInput');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');

const getStrength = (value) => {
    let score = 0;

    if (value.length >= 8) score += 1;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score += 1;
    if (/[0-9]/.test(value)) score += 1;
    if (/[^A-Za-z0-9]/.test(value)) score += 1;

    return score;
};

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;

    if (value.length === 0) {
        strengthFill.style.width = '0%';
        strengthFill.className = 'strength-fill';
        strengthText.textContent = '비밀번호를 입력해주세요.';
        return;
    }

    const score = getStrength(value);

    if (score <= 1) {
        strengthFill.style.width = '33%';
        strengthFill.className = 'strength-fill weak';
        strengthText.textContent = '약함: 길이와 문자 종류를 늘려보세요.';
    } else if (score <= 3) {
        strengthFill.style.width = '66%';
        strengthFill.className = 'strength-fill medium';
        strengthText.textContent = '보통: 특수문자를 추가하면 더 강해져요.';
    } else {
        strengthFill.style.width = '100%';
        strengthFill.className = 'strength-fill strong';
        strengthText.textContent = '강함: 안전한 비밀번호입니다.';
    }
});

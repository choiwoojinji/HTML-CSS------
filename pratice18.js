const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#password-confirm');
const form = document.querySelector('.signup-form');

function setResult(input, isValid, validText, invalidText) {
    const message = input.nextElementSibling;

    input.classList.toggle('valid', isValid);
    input.classList.toggle('invalid', !isValid);
    message.textContent = isValid ? validText : invalidText;
    message.classList.toggle('valid', isValid);
    message.classList.toggle('invalid', !isValid);

    return isValid;
}

function validateUsername() {
    const isValid = usernameInput.value.trim().length >= 4;
    return setResult(usernameInput, isValid, '사용할 수 있는 아이디입니다.', '아이디는 4자 이상 입력해주세요.');
}

function validateEmail() {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    return setResult(emailInput, isValid, '올바른 이메일 형식입니다.', '이메일 형식이 올바르지 않습니다.');
}

function validatePassword() {
    const isValid = passwordInput.value.length >= 6;
    return setResult(passwordInput, isValid, '사용할 수 있는 비밀번호입니다.', '비밀번호는 6자 이상 입력해주세요.');
}

function validatePasswordConfirm() {
    const isValid = passwordConfirmInput.value.length > 0 && passwordConfirmInput.value === passwordInput.value;
    return setResult(passwordConfirmInput, isValid, '비밀번호가 일치합니다.', '비밀번호가 일치하지 않습니다.');
}

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
passwordConfirmInput.addEventListener('input', validatePasswordConfirm);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isFormValid = [
        validateUsername(),
        validateEmail(),
        validatePassword(),
        validatePasswordConfirm(),
    ].every(Boolean);

    if (isFormValid) {
        alert('회원가입에 성공했습니다!');
        form.reset();
        form.querySelectorAll('input').forEach((input) => {
            input.classList.remove('valid', 'invalid');
            input.nextElementSibling.textContent = '';
        });
    }
});

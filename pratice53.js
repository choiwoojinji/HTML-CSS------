const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const usernameHint = document.getElementById('usernameHint');
const passwordHint = document.getElementById('passwordHint');
const passwordConfirmHint = document.getElementById('passwordConfirmHint');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');

function setFieldState(input, hint, isValid, message) {
    input.classList.toggle('valid', isValid);
    input.classList.toggle('invalid', !isValid && input.value.length > 0);
    hint.textContent = input.value.length === 0 ? '' : message;
    hint.classList.toggle('valid', isValid);
    hint.classList.toggle('invalid', !isValid && input.value.length > 0);
}

function validateUsername() {
    const isValid = username.value.length >= 4;
    setFieldState(username, usernameHint, isValid, isValid ? '사용 가능한 아이디입니다.' : '아이디는 4자 이상이어야 합니다.');
    return isValid;
}

function validatePassword() {
    const isValid = password.value.length >= 8;
    setFieldState(password, passwordHint, isValid, isValid ? '사용 가능한 비밀번호입니다.' : '비밀번호는 8자 이상이어야 합니다.');
    return isValid;
}

function validatePasswordConfirm() {
    const isValid = passwordConfirm.value.length > 0 && passwordConfirm.value === password.value;
    setFieldState(passwordConfirm, passwordConfirmHint, isValid, isValid ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.');
    return isValid;
}

function updateSubmitState() {
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isPasswordConfirmValid = validatePasswordConfirm();
    submitBtn.disabled = !(isUsernameValid && isPasswordValid && isPasswordConfirmValid);
}

username.addEventListener('input', updateSubmitState);
password.addEventListener('input', updateSubmitState);
passwordConfirm.addEventListener('input', updateSubmitState);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    result.textContent = `${username.value}님, 가입이 완료되었습니다.`;
});

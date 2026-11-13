const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const calcBtn = document.getElementById('calcBtn');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');

function categorize(bmi) {
    if (bmi < 18.5) return { label: '저체중', className: 'under' };
    if (bmi < 23) return { label: '정상', className: 'normal' };
    if (bmi < 25) return { label: '과체중', className: 'over' };
    return { label: '비만', className: 'obese' };
}

calcBtn.addEventListener('click', () => {
    const heightCm = parseFloat(heightInput.value);
    const weightKg = parseFloat(weightInput.value);

    if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
        bmiValue.textContent = '--';
        bmiCategory.textContent = '키와 몸무게를 올바르게 입력해주세요';
        bmiCategory.className = 'bmi-category';
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const { label, className } = categorize(bmi);

    bmiValue.textContent = bmi.toFixed(1);
    bmiCategory.textContent = `${label} (BMI ${bmi.toFixed(1)})`;
    bmiCategory.className = `bmi-category ${className}`;
});

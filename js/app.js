function calculate(operator) {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const answerEl = document.getElementById('answer');

    if (isNaN(a) || isNaN(b)) {
        answerEl.textContent = 'ENTER BOTH NUMBERS';
        answerEl.className = 'error';
        return;
    }

    let result;
    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
            if (b === 0) {
                answerEl.textContent = 'ERR: DIV BY ZERO';
                answerEl.className = 'error';
                return;
            }
            result = a / b;
            break;
    }

    // Format nicely: avoid floating point weirdness for large decimals
    const formatted = parseFloat(result.toPrecision(10));
    answerEl.textContent = formatted;
    answerEl.className = '';
}

function resetCalc() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    const answerEl = document.getElementById('answer');
    answerEl.textContent = 'AWAITING INPUT_';
    answerEl.className = 'placeholder';
}

// Also allow pressing Enter to add
document.addEventListener('keydown', e => {
    if (e.key === 'Enter') calculate('+');
});
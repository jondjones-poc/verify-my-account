const codes = document.querySelectorAll('.code');
const button = document.getElementById('btn');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if ((codes.length - 1) === idx) {
            codes[idx].value = '';
            setTimeout(() => button.focus(), 10)
        } else if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if (e.key === 'Backspace' && codes[idx - 1]) {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})
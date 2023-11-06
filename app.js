
function build() {
    const number = parseInt(document.getElementById('number').value);
    let pyramid = '';
    for (let i = 1; i <= number; i++) {
        for (let x = 1; x <= i; x++) {
            pyramid += '*';
        }
        pyramid += '<br>'
    }
    document.getElementById('result').innerHTML = pyramid;
}


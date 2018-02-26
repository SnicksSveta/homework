
const btnCalculate = document.querySelector('.btn-calculate');
const inputA = document.querySelector('[name="a"]');
const inputB = document.querySelector('[name="b"]');
const inputC = document.querySelector('[name="c"]');
const result = document.querySelector('.result');

btnCalculate.addEventListener("click", function () {

    const a = parseInt(inputA.value, 10);
    const b = parseInt(inputB.value, 10);

    let valinputC = inputC.value;

    if (valinputC === '+') {
        result.innerHTML = a + b;
    } else if (valinputC === '-') {
        result.innerHTML = a - b;
    } else if (valinputC === '*') {
        result.innerHTML = a * b;
    } else if (valinputC === '/') {
        result.innerHTML = a / b;
        if (inputB.value === 0) {
            alert("Нельзя делить на ноль!");
        }
    }
});

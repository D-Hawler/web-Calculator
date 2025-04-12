const clearOne = document.getElementById("clearOne");

let clear;
clearOne.onclick = () => {
    if (toggle) {
        clear = numberOne.textContent;
    } else {
        clear = numberTwo.textContent;
    }

    const clearNumber = clear.length;
    num2 = clear.slice(0, clearNumber -1);
    
    if (toggle) {
        numberOne.textContent = num2;
        num1 = num2;
    } else {
        numberTwo.textContent = num2;
    }
}

const numberClear = document.getElementById("numberClear");

numberClear.onclick = () => {
    numberOne.textContent = "";
    operator.textContent = "";
    numberTwo.textContent = "";

    num2 = "";

    toggle = true;
};
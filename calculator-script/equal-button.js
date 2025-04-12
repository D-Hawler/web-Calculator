const operatorEvenly = document.getElementById("operatorEvenly");

operatorEvenly.onclick = () => {
    operantMember = operation;
    evenly();
    toggle = true;
};

function evenly() {
    const result = new Function(`return ${num1 + operantMember + num2};`)();
    num1 = parseFloat(result.toFixed(10));
    
    numberOne.textContent = "";
    operator.textContent = "";
    numberTwo.textContent = "";

    numberOne.textContent = num1;
    num2 = num1;
};
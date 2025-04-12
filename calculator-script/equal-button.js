const operatorEvenly = document.getElementById("operatorEvenly");

operatorEvenly.onclick = () => {
    operantMember = operation;
    evenly();
    toggle = true;
};

function evenly() {
    const fun = new Function(`return ${num1 + operantMember + num2};`);
    num1 = fun();
    
    numberOne.textContent = "";
    operator.textContent = "";
    numberTwo.textContent = "";

    numberOne.textContent = num1;
    num2 = num1;
};
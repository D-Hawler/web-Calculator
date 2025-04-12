const operator = document.getElementById("operator");
let operation;

const operatorPlus = document.getElementById("operatorPlus");
operatorPlus.onclick = () => {
    operation = "+";
    operanta();
};

const operatorMinus = document.getElementById("operatorMinus");
operatorMinus.onclick = () => {
    operation = "-";
    operanta();
};

const operatorMultiplication = document.getElementById("operatorMultiplication");
operatorMultiplication.onclick = () => {
    operation = "*";
    operanta();
};

const operatorDivision = document.getElementById("operatorDivision");
operatorDivision.onclick = () => {
    operation = "/";
    operanta();
};

let operantMember;
function operanta() {
    if (numberOne.textContent !== "") {
        if (numberOne.textContent !== "" && operator.textContent !== '' && numberTwo.textContent !== "") {
            operantMember = operator.textContent;
            
            evenly();
            operator.textContent = operation;
        } else {
            operator.textContent = operation;
        }
        num2 = "";
        toggle = false;
    };
};
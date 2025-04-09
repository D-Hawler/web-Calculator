const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");

let number = "";
let toggle = true;

const dialNumberOne = document.getElementById("dialNumberOne");
dialNumberOne.onclick = () => {
    number += "1";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberTwo = document.getElementById("dialNumberTwo");
dialNumberTwo.onclick = () => {
    number += "2";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberThree = document.getElementById("dialNumberThree");
dialNumberThree.onclick = () => {
    number += "3";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberFour = document.getElementById("dialNumberFour");
dialNumberFour.onclick = () => {
    number += "4";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberFive = document.getElementById("dialNumberFive");
dialNumberFive.onclick = () => {
    number += "5";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberSix = document.getElementById("dialNumberSix");
dialNumberSix.onclick = () => {
    number += "6";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberSeven = document.getElementById("dialNumberSeven");
dialNumberSeven.onclick = () => {
    number += "7";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberEight = document.getElementById("dialNumberEight");
dialNumberEight.onclick = () => {
    number += "8";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberNine = document.getElementById("dialNumberNine");
dialNumberNine.onclick = () => {
    number += "9";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};

const dialNumberZero = document.getElementById("dialNumberZero");
dialNumberZero.onclick = () => {
    number += "0";
    console.log(number);
    if (toggle) {
        numberOne.textContent = number;
    } else {
        numberTwo.textContent = number;
    };
};


const operatorPlus = document.getElementById("operatorPlus");
const operatorMinus = document.getElementById("operatorMinus");
const operatorMultiplication = document.getElementById("operatorMultiplication");
const operatorDivision = document.getElementById("operatorDivision");

const operator = document.getElementById("operator");
let x;
let operation;

operatorPlus.onclick = () => {
    if (operator.textContent === "") {
        operator.textContent = "+";
        x = number;
        toggle = false;
        number = "";
        operation = "+";
    } else {
        evenly();
        operator.textContent = "+";
        x = result;
        toggle = false;
        number = "";
        operation = "+";
    };
};

operatorMinus.onclick = () => {
    if (operator.textContent === "") {
        operator.textContent = "-";
        x = number;
        toggle = false;
        number = "";
        operation = "-";
    } else {
        evenly();
        operator.textContent = "-";
        x = result;
        toggle = false;
        number = "";
        operation = "-";
        console.log(result)
    };

};

operatorMultiplication.onclick = () => {
    if (operator.textContent === "") {
        operator.textContent = "x";
        x = number;
        toggle = false;
        number = "";
        operation = "*";
    } else {
        evenly();
        operator.textContent = "x";
        x = result;
        toggle = false;
        number = "";
        operation = "*";
        console.log(result)
    };

};

operatorDivision.onclick = () => {
    if (operator.textContent === "") {
        operator.textContent = "/";
        x = number;
        toggle = false;
        number = "";
        operation = "/";
    } else {
        evenly();
        operator.textContent = "/";
        x = result;
        toggle = false;
        number = "";
        operation = "/";
        console.log(result)
    };

};

const operatorEvenly = document.getElementById("operatorEvenly");


operatorEvenly.onclick = () => {
    evenly();
};

let result;
function evenly() {
    operation = x + operation + number;
    const fun = new Function(`return ${operation}`)
    result = fun();
    numberOne.textContent = String(result);
    operator.textContent = "";
    numberTwo.textContent = "";
    toggle = true;
};




const numberClear = document.getElementById("numberClear");

numberClear.onclick = () => {
    numberOne.textContent = "";
    operator.textContent = "";
    numberTwo.textContent = "";

    number = "";
    x = "";

    toggle = true;
};
const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");

let num1;
let num2 = "";
let toggle = true;

const dialNumberOne = document.getElementById("dialNumberOne");
dialNumberOne.onclick = () => {
    num2 += "1";
    isNumberAddition();
};

const dialNumberTwo = document.getElementById("dialNumberTwo");
dialNumberTwo.onclick = () => {
    num2 += "2";
    isNumberAddition();
};

const dialNumberThree = document.getElementById("dialNumberThree");
dialNumberThree.onclick = () => {
    num2 += "3";
    isNumberAddition();
};

const dialNumberFour = document.getElementById("dialNumberFour");
dialNumberFour.onclick = () => {
    num2 += "4";
    isNumberAddition();
};

const dialNumberFive = document.getElementById("dialNumberFive");
dialNumberFive.onclick = () => {
    num2 += "5";
    isNumberAddition();
};

const dialNumberSix = document.getElementById("dialNumberSix");
dialNumberSix.onclick = () => {
    num2 += "6";
    isNumberAddition();
};

const dialNumberSeven = document.getElementById("dialNumberSeven");
dialNumberSeven.onclick = () => {
    num2 += "7";
    isNumberAddition();
};

const dialNumberEight = document.getElementById("dialNumberEight");
dialNumberEight.onclick = () => {
    num2 += "8";
    isNumberAddition();
};

const dialNumberNine = document.getElementById("dialNumberNine");
dialNumberNine.onclick = () => {
    num2 += "9";
    isNumberAddition();
};

const dialNumberZero = document.getElementById("dialNumberZero");
dialNumberZero.onclick = () => {
    num2 += "0";
    isNumberAddition();
};

const decimalSeparator = document.getElementById("decimalSeparator");
decimalSeparator.onclick = () => {
    if (num2 !== "") {
        num2 += ".";
        isNumberAddition();
    }
};

function isNumberAddition() {
    if (toggle) {
        numberOne.textContent = num2;
        num1 = num2;
    } else {
        numberTwo.textContent = num2;
    };
};
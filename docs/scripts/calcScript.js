const NUMBERS = document.getElementsByClassName("numbers");
const OPERATORS = document.getElementsByClassName("operators");
const AVERAGE = document.getElementById("average");
const EQUALS = document.getElementById("equals");
const INPUT = document.getElementById("input");
const CLEAR = document.getElementById("clearButton");
let numToPush = "";
let arrayOfNums = [];

function buttonDefault(button) {
    button.addEventListener("click", (e) =>
        e.preventDefault()
    )
}
function numberPressed(pressed) {
    pressed.addEventListener("click", () => {
        INPUT.value += pressed.innerHTML;
        return numToPush += pressed.innerHTML;
        }
    )
}
function operatorPressed(pressed) {
    const PLACEHOLDER_INT = parseInt(INPUT.placeholder);
        if (pressed === OPERATORS[0]) {
            pressed.addEventListener("click", () => {
                if(typeof PLACEHOLDER_INT === "number" && PLACEHOLDER_INT !== 0) {
                    INPUT.value = INPUT.placeholder + pressed.innerHTML;
                    arrayOfNums.push(PLACEHOLDER_INT);
                    INPUT.placeholder = "0";
                } else {
                    INPUT.value += pressed.innerHTML;
                    parseInt(numToPush) !== 0 ? (arrayOfNums.push(parseInt(numToPush)), numToPush = "")  : "";
                }
            })
        } else {
            pressed.addEventListener("click", () => {
                if(typeof PLACEHOLDER_INT === "number" && PLACEHOLDER_INT !== 0) {
                    INPUT.value = INPUT.placeholder + pressed.innerHTML;
                    INPUT.placeholder = "0";
                } else {
                    INPUT.value += pressed.innerHTML;
                }
            })
        }     
}
function equals(evaluate) {
    evaluate.addEventListener("click", () =>
        INPUT.value = eval(INPUT.value)
    )
}
function average(evaluate) {
    evaluate.addEventListener("click", () => {
         numToPush === "" ? (INPUT.value = "", INPUT.placeholder = arrayOfNums.reduce((a,b) => a + b) / arrayOfNums.length, arrayOfNums = []) : (arrayOfNums.push(parseInt(numToPush)), INPUT.value = "", INPUT.placeholder = arrayOfNums.reduce((a,b) => a + b) / arrayOfNums.length, numToPush = "", arrayOfNums = []);
        return numToPush, arrayOfNums;
        }
    )
}
function clear(clearPressed) {
    clearPressed.addEventListener("click", () => {
        INPUT.value = null;
        INPUT.placeholder = "0";
        return numToPush = "", arrayOfNums = [];      
        }
    )
}
buttonDefault(EQUALS);
buttonDefault(AVERAGE);
buttonDefault(CLEAR);
equals(EQUALS);
average(AVERAGE);
clear(CLEAR);

for(let i = 0; i < NUMBERS.length; i++) {
        buttonDefault(NUMBERS[i]);
        numberPressed(NUMBERS[i]);       
    }
for(let j = 0; j < OPERATORS.length; j++) {
        buttonDefault(OPERATORS[j]);
        operatorPressed(OPERATORS[j]);
    }
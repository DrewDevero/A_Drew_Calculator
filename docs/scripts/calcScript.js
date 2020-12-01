const NUMBERS = document.getElementsByClassName("numbers");
console.log(NUMBERS);
const OPERATORS = document.getElementsByClassName("operators");
console.log(OPERATORS);
const AVERAGE = document.getElementById("average");
const EQUALS = document.getElementById("equals");
const INPUT = document.getElementById("input");
const CLEAR = document.getElementById("clearButton");
let arrayOfNums = [];

function buttonDefault(button) {
    button.addEventListener("click", (e) =>
        e.preventDefault()
    )
}
function buttonPressed(pressed) {
    pressed.addEventListener("click", () => {
        INPUT.value += pressed.innerHTML;
            pressed.innerHTML !== "0" ? arrayOfNums.push(parseInt(pressed.innerHTML)) : "";
        }
    )
}
function equals(evaluate) {
    evaluate.addEventListener("click", () =>
        INPUT.value = eval(INPUT.value)
    )
}
function average(evaluate) {
    evaluate.addEventListener("click", () => {
         INPUT.value = arrayOfNums.reduce((a,b) => a + b) / arrayOfNums.length;    
        }
    )
}
function clear(clearPressed) {
    clearPressed.addEventListener("click", () => {
        INPUT.value = null;
        arrayOfNums = [];
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
        buttonPressed(NUMBERS[i]);       
    }
for(let j = 0; j < OPERATORS.length; j++) {
        buttonDefault(OPERATORS[j]);
        buttonPressed(OPERATORS[j]);
    }

let calcEntry = ""; // expression being entered
calcEntry = "984+-.02−3.×-654÷984.−-3.14"; updateDisplay();

// flags for making sure operations are correct
let hasDecimal = false;
let isNumber = false;
let isNegative = false;

// numbers
for (let i = 0; i <= 9; i++) {
    document.querySelector(`#button-${i}`).addEventListener("click", () => {
        calcEntry += i;
        isNumber = true;
        updateDisplay();
    });
}

// decimals
document.querySelector("#button-decimal").addEventListener("click", () => {
    if (!hasDecimal) {
        calcEntry += ".";
        hasDecimal = true;
        isNegative = true;
        updateDisplay();
    }
});

// operators
const OPERATORS = ["divide", "multiply", "subtract", "add"];
const OP_SYMBOLS = ["÷", "×", "−", "+", "-"];
for (let i = 0; i < OPERATORS.length; i++) {
    document.querySelector(`#button-${OPERATORS[i]}`).addEventListener("click", () => {
        if (isNumber) {
            calcEntry += OP_SYMBOLS[i];
            hasDecimal = false;
            isNumber = false;
            isNegative = false;
            updateDisplay();
            // subtract can also make a number negative
        } else if (OPERATORS[i] === "subtract" && !isNegative) {
            calcEntry += "-";
            isNegative = true;
            updateDisplay();
        }
    });
}

// clear
document.querySelector("#button-clear").addEventListener("click", () => {
    calcEntry = "";
    hasDecimal = false;
    isNumber = false;
    isNegative = false;
    updateDisplay();
});

// do a calculation based on the operator and two numbers
function operate(operator, x, y) {
    switch (operator) {
        case "add": return x + y;
        case "subtract": return x - y;
        case "multiply": return x * y;
        case "divide": return x / y;
    }
}

// updates the calculator display
function updateDisplay() {
    document.querySelector("#display-text").textContent = calcEntry;
}
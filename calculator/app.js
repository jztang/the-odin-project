let calcEntry = ""; // expression being entered
// calcEntry = "984+-.02−3.×-654÷984.−-3.14"; updateDisplay();
calcEntry = "123456789×123456789×12345678"; updateDisplay();

// flags for making sure operations are correct
let hasDecimal = false;
let isNumber = false;
let isNegative = false;
let isError = false;
let isResult = false;

// numbers
for (let i = 0; i <= 9; i++) {
    document.querySelector(`#button-${i}`).addEventListener("click", () => {
        if (isError || isResult) {
            calcEntry = "";
            isError = false;
            isResult = false;
        }
        calcEntry += i;
        isNumber = true;
        updateDisplay();
    });
}

// decimals
document.querySelector("#button-decimal").addEventListener("click", () => {
    if (!hasDecimal) {
        if (isError || isResult) {
            calcEntry = "";
            isError = false;
            isResult = false;
        }
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
        if (isError) {
            calcEntry = "";
            isError = false;
        }
        if (isNumber) {
            calcEntry += OP_SYMBOLS[i];
            hasDecimal = false;
            isNumber = false;
            isNegative = false;
            isResult = false;
            updateDisplay();
        } else if (OPERATORS[i] === "subtract" && !isNegative) {
            // subtract can also make a number negative
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
    isError = false;
    updateDisplay();
});

// equals
document.querySelector("#button-equals").addEventListener("click", () => {
    // parse the entry
    let entryNums = calcEntry.split(/[\÷\×\−]|(?<!e)\+/g);
    if (entryNums.length === 1) return;
    for (let i = 0; i < entryNums.length; i++) {
        entryNums[i] = Number(entryNums[i]);
    }
    let entryOps = calcEntry.match(/[\÷\×\−]|(?<!e)\+/g);

    // remove trailing operators, if any
    if (!isNumber) {
        entryNums.pop();
        entryOps.pop();
    }

    // follow order of operations and calculate the result
    for (let i = 0; i < OPERATORS.length; i++) {
        let curOpName = OPERATORS[i];
        let curOpSymbol = OP_SYMBOLS[i];
        while (entryOps.includes(curOpSymbol)) {
            let index = entryOps.indexOf(curOpSymbol);

            // check for division by zero
            if (curOpName === "divide" && entryNums[index + 1] == 0) {
                calcEntry = "Error: division by zero"
                hasDecimal = false;
                isNumber = false;
                isNegative = false;
                isError = true;
                updateDisplay();
                return;
            }

            let result = operate(curOpName, entryNums[index], entryNums[index + 1]);

            // fix floating point precision errors
            result = Math.round(result * 100000000000) / 100000000000;

            // make sure big numbers (sci. notation) don't overflow display
            if (result.toString().includes("e")) {
                result = result.toPrecision(15);
            }

            entryNums.splice(index, 2, result);
            entryOps.splice(index, 1);
        }
    }

    // display the result, reset some flags
    calcEntry = entryNums[0].toString();
    // console.log(entryNums[0]);
    isNumber = true;
    isResult = true;
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
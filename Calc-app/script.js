const numbers = document.querySelectorAll(".number");
const decimal = document.querySelector(".decimal");
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    if (flag === "0") {
      updateScreen(currentInput);
    } else {
      updateScreen(x + currentInput);
    }
  });
});

let prevInput = "0";
let calculationOperator = "";
let currentInput = "0";
let x = "0";
let flag = "0";

const inputNumber = (number) => {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(x);
  });
});

const inputOperator = (operator) => {
  prevInput = currentInput;
  calculationOperator = operator;
  x = currentInput + operator;
  flag = "1";
  currentInput = "0";
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentInput);
  currentInput = "0";
});

const calculate = () => {
  let result = 0;
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevInput) + parseFloat(currentInput);

      break;
    case '-':
      result = parseFloat(prevInput) - parseFloat(currentInput);

      break;
    case '*':
      result = parseFloat(prevInput) * parseFloat(currentInput);

      break;
    case '/':
      result = parseFloat(prevInput) / parseFloat(currentInput);

      break;
      case '%':
        result = parseFloat(prevInput) % parseFloat(currentInput);

        break;
    default:
      return;
  }
  currentInput = result.toString();
  calculationOperator = "";
  flag = "0";
  x = "0";
}
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentInput);
});
const clearAll = () => {
  prevInput = "0";
  calculationOperator = "";
  currentInput = "0";
  x = "0";
  flag = "0";
}


decimal.addEventListener("click", (event) => {
  inputNumber(event.target.value);
  if (flag === "0") {
    updateScreen(currentInput);
  } else {
    updateScreen(x + currentInput);
  }
});

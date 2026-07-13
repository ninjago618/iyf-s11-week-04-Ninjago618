function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    // Your code
}

function multiply(a, b) {
    // Your code
}

function divide(a, b) {
    // Your code (handle zero!)
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        // Add remaining cases
        default:
            return "Invalid operator";
    }
}

// Test
console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "-", 5));  // 5
console.log(calculate(10, "*", 5));  // 50
console.log(calculate(10, "/", 5));  // 2
console.log(calculate(10, "/", 0));  // Error message

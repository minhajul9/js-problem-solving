function calculator(num1, num2, operator) {
    const exp = `${num1} ${operator} ${num2}`;
    const result = eval(exp);
    if (isNaN(result)) {
        return "Error: Invalid input or operator.";
    }
    return result;
}

// console.log(calculator(5, 6, '-'));
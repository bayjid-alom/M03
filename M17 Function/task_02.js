// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function multiply_divide(number) {
    console.log("Given number is :", number)
    if (number % 2 === 1) {
        const multiply = number * 2;
        return multiply;
    }
    if (number % 2 === 0) {
        const divide = number / 2;
        return divide;
    }
}

console.log(multiply_divide(111))

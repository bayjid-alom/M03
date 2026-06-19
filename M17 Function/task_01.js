// Task-1  
// Take four parameters. Multiply the four numbers and then return the result 

function multiplyNumbers(num_1, num_2, num_3, num_4) {
    console.log(num_1, num_2, num_3, num_4)
    const multiply = num_1 * num_2 * num_3 * num_4;
    return multiply;
}

const numbers = multiplyNumbers(10, 15, 25, 35);
console.log("The multiply value is :", numbers)
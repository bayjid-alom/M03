console.log("===============| function syntax |===============")

function fanOff() {
    console.log("Click the switch to off the fan.")
}
fanOff()


function doSum() {
    console.log("Take note book and pen.")
    console.log("Do Sum.")
}
doSum()




// Animated video
console.log("=============| function parameter |=============")

function square(number) {
    console.log(number)
    const square_value = number ** 2;
    console.log("Square value is :", square_value)
}

square(4);
square(12)


function addNumber(num_1, num_2) {
    console.log(num_1, num_2)
    const sum = num_1 + num_2;
    console.log("Summation is :", sum)
}

addNumber(10, 20);
addNumber(55, 50)



function addAll(a, b, c, d, e) {
    console.log(a, b, c, d, e)      // 10 20 30 undefined undefined
    const total = a + b + c + d + e;
    console.log("Total :", total)   //Total : NaN
}

addAll(10, 20, 30);
addAll(5, 10, 15, 20, 25)



console.log("=============| function arguments |=============")

function doubleIt(num) {
    const doubled = num * 2;
    console.log(num, "Doubled Value is:", doubled)
}
// pass value
doubleIt(25)
doubleIt(75)

// pass variable
const money = 1000;
doubleIt(money)

// here - parameter:num   arguments:25


function difference(num_3, num_4) {
    const diff = num_3 - num_4;
    console.log(num_3, num_4, "Age Difference :", diff)
}

// direct value pass
difference(30, 15)

const fatherAge = 45;
const myAge = 18;
difference(fatherAge, myAge)




console.log("=============| return & set return value |=============")
// return -- console outside of function body

function tenTimes(number_10) {
    const result = number_10 * 10;
    return result;
}
const output = tenTimes(10)
console.log("10X :", output)


function makeHalf(number_5) {
    const half = number_5 / 2;
    return half;
}

const half = makeHalf(1000);
console.log("Half value :", half)



console.log("=============| conditional return |=============")

function isEven(number_15) {
    if (number_15 % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const evenCheck = isEven(15)
console.log(evenCheck)
console.log(isEven(10))



function isOdd(x) {
    if (x % 2 === 1) {
        return true;
    }
    return false;      // short
}
console.log(isOdd(10))
console.log(isOdd(15))




console.log("=============| various parameters |=============")


function evenSizedString(str) {
    console.log(str)

    const sized = str.length;
    console.log("Length :", sized)
    if (sized % 2 === 0) {
        console.log("Even Sized.")
        return true;
    }
    else {
        console.log("Odd Sized.")
        return false;
    }
}

evenSizedString("Dhaka")


// boolean pass + number pass
function doubleOrTripple(aNumber, doDouble) {
    if (doDouble) {
        const result = aNumber * 2;
        return result;
    }
    else {
        const result = aNumber * 3;
        return result;
    }
}

console.log(doubleOrTripple(5, true))
console.log(doubleOrTripple(5, false))



function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}

const checkLength = numberOfElements([10, 20, 30, 40])
console.log("Length is (array) :", checkLength)




console.log("=============| sum of all numbers in array |=============")

/*
Objective: write a function to give me the sum of all numbers in an array.
step-1. declare a function
step-2. call check whether the function is called properly
step-3. set a parameter(s)
step-4. pass the paremeter(s), check whether parameter is passed in a proper format.
step-5. do the function tasks (step by step)
*/

function sumOffNumbers(numbers) {
    let sum = 0;
    for (number of numbers) {
        console.log(number)
        sum = sum + number;
    }
    return sum;
}

const nums = [11, 22, 33, 44, 55]
const sum = sumOffNumbers(nums)
console.log("Sum of numbers is:", sum)




function summation(number_x) {
    let sum = 0;
    for (number of number_x) {
        console.log(number)
        sum = sum + number;
    }
    return sum;
}

const numArr = [5, 10, 15, 20]
const sum_2 = summation(numArr)
console.log("Summation :", sum_2)



console.log("=============| return all the even numbers |=============")

/**
 * create function that will return only the even numbers
 * 
 */

function evenNumbersOnly(num__s) {
    // console.log(num__s)
    const evens = [];

    for (number of num__s) {
        console.log(number)
        if (number % 2 === 0) {
            console.log("Even :", number)
            evens.push(number)
        }
    }
    return evens;
}

const num__s = [5, 15, 25, 35, 10, 18, 100]
const evens = evenNumbersOnly(num__s)
console.log("Array of even numbers :", evens)



function odd_only(num__odd) {
    console.log(num__odd)

    let odds = [];
    for (number of num__odd) {
        // console.log(number)
        if (number % 2 === 1) {
            console.log("Odd :", number)
            odds.push(number);
        }
    }
    return odds;
}

const num_array = [515, 520, 525, 540, 555, 570];
const odds = odd_only(num_array)
console.log("Odd numbers array :", odds)





// Even numbers summation (array)

function sumOfEvenNumbers(numberss) {
    console.log(numberss)

    let sum = 0;
    for (number of numberss) {
        if (number % 2 === 0) {
            console.log(number)
            sum = sum + number;
        }
    }
    return sum;
}

const numbers_arr = [50, 55, 100, 155, 200, 255, 300];
const evens_summation = sumOfEvenNumbers(numbers_arr)
console.log("Summation of Even numbers :", evens_summation)
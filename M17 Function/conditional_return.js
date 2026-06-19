/**
 Problem - 01
# Positive, Negative, or Zero
Create a function checkNumber(num).
Return "Positive" if the number is greater than 0.
Return "Negative" if the number is less than 0.
Return "Zero" if the number is 0.

 */

// Program: 01

function checkNumber(num) {
    if (num > 0) {
        return "Posive number.";
    }
    else if (num < 0) {
        return "Negative number."
    }
    else {
        return "Zero"
    }

}

console.log(checkNumber(15))
console.log(checkNumber(0))
console.log(checkNumber(-10))



/**
 * Problem - 02   
 * # Free Shipping
Create a function freeShipping(amount).
Return true if the purchase amount is 1000 or more.
Otherwise, return false.
 */

// Program - 02

function freeShipping(amount){
    if(amount >= 1000){
        return true;
    }
    else{
        return false;
    }

}

console.log(freeShipping(500))
console.log(freeShipping(1250))




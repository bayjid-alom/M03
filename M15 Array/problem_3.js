/**
 * 3. Checking Array Membership with ‘includes’

Instructions:

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.
 */

// Program below :

let books = ["Python Programming", "JavaScript", "C++"]
let hasJsBooks = books.includes("JavaScript")

if (hasJsBooks === true) {
    console.log("The element is present in the array.")
}

else {
    console.log("The element is NOT present in the array.")
}






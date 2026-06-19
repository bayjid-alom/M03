// # Function Practice Tasks

// ### Task-1
// Write a function called `sum_numbers()` which takes two numbers as parameters and returns their sum.

// Program - 01 

function sum_numbers(num_1, num_2) {
    const sum = num_1 + num_2;
    return sum;
}
console.log(sum_numbers(25, 50))
console.log(sum_numbers(50, 50))



// ### Task-2
// Write a function called `find_max()` which takes three numbers as parameters and returns the largest number.

// Program - 02
function find_max(num_a, num_b, num_c) {
    console.log("Three numbers :", num_a, num_b, num_c)
    if (num_a > num_b && num_a > num_c) {
        console.log("Largest number is :", num_a)
    }
    else if (num_b > num_c && num_b > num_a) {
        console.log("Largest number is :", num_b)
    }
    else {
        console.log("Largest number is :", num_c)
    }
}

const num_abc = find_max(25, 50, 75)



// ### Task-3
// Write a function called `is_positive()` which takes a number as a parameter. If the number is positive return `"Positive"`, otherwise return `"Negative"`.

// Program - 03
function is_positive(num_check) {
    if (num_check > 0) {
        console.log("Positive")
    }
    else {
        console.log("Negative")
    }

}

is_positive(10)



// ### Task-4
// Write a function called `string_length()` which takes a string as a parameter and returns the length of that string.

// Program - 04
function string_length(str) {
    console.log("Lenght of the string :", str.length)
}

string_length("I am learning Web Development.")
string_length("I am a student of Dhaka Polytechnic Institute.")



// ### Task-5
// Write a function called `square_number()` which takes a number and returns its square.

// ### Task-6
// Write a function called `count_vowels()` which takes a string and returns the total number of vowels (`a, e, i, o, u`) present in it.

// ### Task-7
// Write a function called `find_smallest()` which takes an array of numbers and returns the smallest number.

// ### Task-8
// Write a function called `reverse_text()` which takes a string and returns the reversed string.

// ### Task-9
// Write a function called `temperature_converter()` which takes temperature in Celsius and returns the temperature in Fahrenheit.

// Formula:
// F = (C × 9/5) + 32

// ### Task-10
// Write a function called `count_even()` which takes an array of numbers and returns how many even numbers are present in the array.

// ### Task-11
// Write a function called `is_leap_year()` which takes a year as parameter and returns `"Leap Year"` or `"Not Leap Year"`.

// ### Task-12
// Write a function called `factorial()` which takes a positive integer and returns its factorial.

// ### Task-13
// Write a function called `find_longest_word()` which takes an array of strings and returns the longest word.

// ### Task-14
// Write a function called `count_uppercase()` which takes a string and returns the total number of uppercase letters.

// ### Task-15
// Write a function called `remove_spaces()` which takes a string and returns the string after removing all spaces.

// ### Task-16
// Write a function called `count_odd()` which takes an array of numbers and returns the total count of odd numbers.

// ### Task-17
// Write a function called `multiply_array()` which takes an array of numbers and returns the multiplication result of all elements.

// ### Task-18
// Write a function called `first_character()` which takes a string and returns its first character.

// ### Task-19
// Write a function called `last_character()` which takes a string and returns its last character.

// ### Task-20
// Write a function called `is_divisible_by_five()` which takes a number and returns `"Yes"` if divisible by 5, otherwise `"No"`.
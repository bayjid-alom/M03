console.log("===========| Array traversal using for/while loop |==========")

/*
🔁 Array Traversal
Traversal মানে array এর সব item এক এক করে দেখা।

Looping technique's:
 1. for loop
 2. while loop
 3. do while loop
 4. for of --> array looping
 5. for in --> object looping
 */

const friends = ["Elon Mask", "Bill Gates", "Waren"]

for (const friend of friends) {
    // console.log(friend)
}


for (let i = 0; i < friends.length; i++) {
    console.log(i)
    console.log(friends[i])
}



const numbers = [10, 20, 30, 40, 50, 60, 70];

// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// while loop

let i = 0;
while (i < friends.length) {
    console.log(friends[i])
    i++;
}




console.log("===========| traversal without reverse method |==========")


const numbers_2 = [11, 22, 33, 44, 55, 66];
// const rev = numbers_2.reverse()
// console.log("Using reverse method : ", rev)


// Way -- 01 (without using reverse method)
const reverse_numbers = [];
for (const num of numbers_2) {
    // console.log(num)
    reverse_numbers.unshift(num)
}
console.log("Using unshift() :", reverse_numbers)



// Way -- 02 (without using reverse method)
const reversed = [];
for (let i = 0; i < numbers_2.length; i++) {
    // console.log(numbers_2[i])
    reversed.unshift(numbers_2[i])
}
console.log("Using for loop: ", reversed)



// Way -- 03 (without using reverse method)
// reverse way loop - decremental for loop

const reverse_way = [];
for (let i = numbers_2.length - 1; i >= 0; i--) {
    // console.log(numbers_2[i])
    reverse_way.push(i)
}
console.log("Using reverse way :", reversed)




console.log("===============| sort an array |================")

// Ascending (smaller to larger A-Z  0-9)
// Descendig (larger to smaller Z-A  9-0)


const persons = ["Shakib", "Tamim", "Mustafiz", "Masrafee", "Ashraful", "ashraful"]
const sortedPersons = persons.sort()
console.log(sortedPersons)


const numbers_3 = [4, 7, 12, 6, 10, 20, 30, 40, 50, 15, 25, 35];
const numbers_asc = numbers_3.sort()           // not working properly

// working this - ascending
const numbers_asc_2 = [...numbers_3].sort(function (a, b) { return a - b })

// working this - descending
const numbers_dsc = [...numbers_3].sort(function (a, b) { return b - a })

console.log(numbers_asc_2)
console.log(numbers_dsc)


// [...numbers_3]     array will copy | not change




console.log("===============| Practice |================")
// repo: 









// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(marks) {
    console.log(marks)

    let sum = 0;
    for (mark of marks) {
        console.log(mark)
        sum = sum + mark;
    }
    sum = sum / marks.length;
    return sum;
}

const marks = [77, 90, 85, 95, 80];
const average = make_avg(marks)
console.log("Average is :", average)


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// Program Below :

const age = 17;
const ticketPrice = 800;
let isStudent = true;

if (age < 10) {
    console.log("Free.")
}
else if (isStudent === true) {
    const discount = ticketPrice * 50 / 100;
    const paidAmount = ticketPrice - discount;
    console.log("Paid Amount (50%) :", paidAmount)
}

else if (age >= 60) {
    const discount = ticketPrice * 15 / 100;
    const paidAmount = ticketPrice - discount;
    console.log("Paid Amount (15%) :", paidAmount)
}
else {
    console.log("Regular ticket fare :", ticketPrice, "TK")
}

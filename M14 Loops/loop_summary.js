console.log("=========| Introduction for loop |===========")
// Structure : for (first part ;  second part ; third part)

for (let num = 0; num < 5; num++) {
    console.log(num);
}

for (let b = 100; b <= 2000; b += 100) {
    console.log(b)
}

for (let s = 1; s <= 10; s += 2) {
    console.log("Even (Using for loop) :", s)
}


console.log("=========| Introduction while loop |==========")

let a = 1;
while (a <= 10) {
    console.log("(1 to 10) : ", a);
    a++;
}


// let i = 0;
// while (true) {
//     console.log("infinite looping....")
//     i++;
// }


let message = 0;
while (message <= 10) {
    console.log("Please receive the call.")
    message++;
}


console.log("=========| Problem Solving |==========")

let n = 0;
while (n <= 100) {
    console.log(n);
    n += 10;
}


let m = 1;
let sum = 0;
while (m <= 10) {
    console.log(m)
    sum = sum + m;
    console.log("Summation is between 1-10: ", sum)
    m++;
}


// Even numbers Between 10 to 20 :

let p = 10;
while (p <= 20) {
    if (p % 2 === 0) {
        console.log("Even Number : ", p)
    }
    p++;
}

// Odd Numbers between 90 to 100 :

let q = 90;
while (q <= 100) {
    if (q % 2 === 1) {
        console.log("Odd Number : ", q)
    }
    q++;
}


console.log("========| Problem Solving for/while loop |=========")

// Summation

let total = 0;
for (let u = 1; u <= 10; u++) {
    total = total + u;
}
console.log("Sum of numbers from 1 to 10 :", total)

// reverse for loop

for (let v = 20; v >= 1; v--) {
    console.log(v)
}

for (let w = 100; w >= 10; w -= 10) {
    console.log(w)
}


let x = 500;
while (x >= 100) {
    console.log("Reverse (-100) :", x)
    x -= 100;
}


console.log("=========| Different ways to use loop |==========")

// n % 2 === 1  or, n % 2 !== 0

for (e = 1; e <= 10; e++) {
    if (e % 2 === 1) {
        console.log("Odd number : ", e)
    }
}

for (f = 5; f <= 25; f += 5) {
    console.log("Increase +5 : ", f)
}

// Divisible by 12
for (h = 1; h <= 72; h++) {
    if (h % 12 === 0) {
        console.log("Divisible by 12 : ", h)
    }
}

// Divisible by 4 and 5  between 1-50

for (k = 1; k <= 50; k++) {
    if (k % 4 === 0 && k % 5 === 0) {
        console.log(" 4 && 5 : ", k)
    }
}

// Summation (1-20) which are divisible by 3

let sum_3 = 0;
for (c = 1; c < 20; c++) {
    if (c % 3 === 0) {
    }
    sum_3 = sum_3 + c;
}
console.log("Summation (divisible /3) :", sum_3)


console.log("=========| break/continue |==========")


for (let j = 1; j <= 15; j++) {
    console.log(j);
    if (j > 4) {
        break;
    }
}


let o = 10;

while (o <= 20) {
    console.log("Break (15) :", o);

    if (o >= 15) {
        break;
    }
    o++;
}



let r = 95;
while (r >= 75) {
    console.log(r);
    if (r <= 85) {
        break;
    }
    r--;
}



// continue --- skip this iteration
// break --- loop end.

for (i = 20; i < 40; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("Continue (even) :", i)
}



console.log("=========| do while loop |==========")
// first execute . then check condition

let number_ = 5000;
do {
    console.log(number_)
    number_++;
}
while (number_ <= 5005)



let y = 100;
do {
    console.log("-100 : ", y)
    y--;
}
while (y >= 85)

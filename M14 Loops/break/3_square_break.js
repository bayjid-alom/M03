/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
    let root = Math.sqrt(i)

    if (root === Math.floor(root) && i !== 1) {
        console.log("First Number found! : ", i);
        break;
    }
    console.log(i)
}
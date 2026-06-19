let arr = ["Mango", "Apple", "Banana"];

// add last
arr.push("Orange");

// remove last
arr.pop();

// add first
arr.unshift("Jackfruit");

// remove first
arr.shift();

// check value
console.log(arr.includes("Apple"));

// find index
console.log(arr.indexOf("Banana"));

// total items
console.log(arr.length);

// convert to string
console.log(arr.join("-"));

// merge arrays
console.log(arr.concat(["Grape"]));

// cut (copy)
console.log(arr.slice(1, 2));

// modify array
arr.splice(1, 1, "Cherry");

console.log(arr);

// check array
console.log(Array.isArray(arr));
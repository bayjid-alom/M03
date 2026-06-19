console.log("✅ Xplore_______what_____you can do with Js Object")

const student = {
    name: "Bayjid Alom",
    id: 241118,
    address: "Ramna - Dhaka",
    isSingle: true,
    friends: ["Hasan", "Anik", "Jihad"],
    milestone: [{ name: "Xiomi 9", year: 2019 }, { name: "HP 250 G9", year: 2024 }],
    // ফাংশন ডিফাইন 
    dream: function () {
        console.log("To be a programmer.")
    },

    cycle: {
        brand: "Seventy One",
        price: 13500,
        made: 2022,
        manufacturer: {
            name: "Rahman",
            ceo: "X Ali",
        }
    }
}

// console.log(student)
// console.log(student.cycle.manufacturer.ceo)

// ফাংশন কল 
student.dream();





const items = [
    { name: "Phone", price: 15000 },
    { name: "Laptop", price: 55000 }
]
// items[0]


const products = {
    '0': 15,
    '1': 18,
    '2': 55
}
console.log(Array.isArray(products))


function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);  // array like object
}

add(10, 20, 30, 40, 50);
// array like object - যেখানে এরে এর সব মেথড কাজ করবে না!!
// O/P: [Arguments] { '0': 10, '1': 20, '2': 30 }



console.log("✅ Object_________Matched________Items")



const itemss = [
    { name: "Xiaomi 9 Phone", price: 15000, color: "blue" },
    { name: "Vivo Y20 Phone", price: 18000, color: "white" },
    { name: "HP 250 G9 Laptop", price: 55000, color: "white" },
    { name: "Asus Vivobook laptop", price: 80000, color: "black" },
    { name: "Xiaomi 9 Phone", price: 15000, color: "black" },
    { name: "Xiaomi 9 Phone", price: 15000, color: "black" },
    { name: "Xiaomi 9 Phone", price: 15000, color: "black" },
]

function matched_item(itemss, search) {

    let matched = [];
    for (let item of itemss) {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(item);
        }
    }
    return matched;
}

const matched = matched_item(itemss, "phone");
console.log(matched)



// Follow commitment. Stay focus | Don't give up 💪🏻
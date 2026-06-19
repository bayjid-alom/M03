# ⚙️ JavaScript Operators & Condition Basics (Complete Guide)

---

## ⚖️ Most Important Operators (Must Remember)

| Operator | Type | Meaning | Example |
|----------|------|--------|----------|
| == | Comparison | Value only check | 5 == "5" → true |
| === | Comparison | Value + type check | 5 === "5" → false |
| != | Comparison | Not equal (value only) | 5 != 10 |
| !== | Comparison | Strict not equal | 5 !== "5" |
| && | Logical | AND (all true) | true && false |
| \|\| | Logical | OR (any true) | true \|\| false |
| ! | Logical | NOT (reverse) | !true → false |
| !! | Logical trick | Convert to boolean | !!"hello" → true |

---

## ➕ Arithmetic Operators
➤ Addition `+` → 5 + 3 = 8  
➤ Subtraction `-` → 5 - 3 = 2  
➤ Multiplication `*` → 5 * 3 = 15  
➤ Division `/` → 6 / 2 = 3  
➤ Modulus `%` → 5 % 2 = 1  

---

## 🧾 Assignment Operators
➤ `=` → assign value  
➤ `+=` → add and assign  
➤ `-=` → subtract and assign  
➤ `*=` → multiply and assign  
➤ `/=` → divide and assign  

---

## ⚖️ Comparison Operators (Simple View)
➤ `>` → greater than  
➤ `<` → less than  
➤ `>=` → greater or equal  
➤ `<=` → less or equal  

---

## 🔥 Difference: == vs ===

| Feature | == | === |
|--------|----|-----|
| Check | value only | value + type |
| Type conversion | yes | no |
| Best practice | ❌ avoid | ✅ use this |

---

## 🧠 Truthy & Falsy Values

### ❌ Falsy:
- false  
- 0  
- ""  
- null  
- undefined  
- NaN  

### ✅ Truthy:
- Everything else

---

## 💻 Example

```js
let value = "hello";

if (value) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}
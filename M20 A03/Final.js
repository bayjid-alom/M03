// 01 
function newPrice(currentPrice, discount) {

    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }
    else if (discount < 0 || discount > 100) {
        return "Invalid"
    }

    let discountAmount = (currentPrice * discount) / 100;
    let discountedPrice = currentPrice - discountAmount;
    return discountedPrice.toFixed(3);
}

// 02
function validOtp(otp) {

    if (typeof otp !== "string") {
        return "Invalid"
    }
    else if (otp.startsWith("ph-") && otp.length === 8) {
        return true;
    } else {
        return false;
    }

}

// 03
function finalScore(omr) {
    if (typeof omr !== "object") {
        return "Invalid"
    }

    let right = omr.right;
    let wrong = omr.wrong;
    let skip = omr.skip;
    let total = right + wrong + skip;

    if (total !== 100) {
        return "Invalid";
    }

    let score = right - (wrong * 0.5);
    // console.log(score)
    let roundedScore = Math.round(score);
    return roundedScore;
}

// 04
function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid"
    }

    let haCount = 0;
    let naCount = 0;
    for (let i = 0; i < array.length; i = i + 1) {

        if (array[i] === "ha") {
            haCount = haCount + 1;
        }
        else if (array[i] === "na") {
            naCount = naCount + 1;
        }
    }
    if (haCount > naCount) {
        return true;
    }
    else if (haCount === naCount) {
        return "equal";
    }
    else {
        return false;
    }
}

// 05
function analyzeText(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let withoutSpace = str.trim();
    if (!withoutSpace) {
        return "Invalid";
    }

    let words = withoutSpace.split(" ");
    let longest = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    let noSpace = withoutSpace.split(" ").join("");
    let totalCharacters = noSpace.length;

    return {
        longwords: longest,
        token: totalCharacters
    };


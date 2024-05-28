function insertDashes(num) {
    // Convert number to string to iterate through its digits
    let numStr = num.toString();
    let result = '';

    for (let i = 0; i < numStr.length - 1; i++) {
        // Check if both current and next digits are even
        if (parseInt(numStr[i]) % 2 === 0 && parseInt(numStr[i + 1]) % 2 === 0) {
            result += numStr[i] + '-';
        } else {
            result += numStr[i];
        }
    }

    // Add the last digit
    result += numStr[numStr.length - 1];

    return result;
}

// Example usage:
let inputNumber = 246804;
let dashedNumber = insertDashes(inputNumber);
console.log("Number with dashes between even digits:", dashedNumber);

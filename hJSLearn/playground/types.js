/*
Playing with Types
Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

*/

function stringToNumber(input) {
    const result = Number(input);
    return isNaN(result) ? "Not a number" : result;
}

function flipBoolean(input) {
    if (typeof input === 'string' && input.toLowerCase() === 'false'){
        return true;
    }
    return !Boolean(input);
}

function whatAmI(input) {
    let result = '';
    if (typeof input === "string"){
        result = "I'm a string!";
    } else if (!isNaN(input) && input !== null && input !== ""){
        result = "I'm a number!";
    }
    return result;
}

function isItTruthy(input) {
    if (Boolean(input) === true) {
        return "It's truthy!"
    } else {
        return "It's falsey!";
    }
}
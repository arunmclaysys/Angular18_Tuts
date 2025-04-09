/*
Arrays and Methods
Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array

Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array

Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array

Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/

function filterNumbers(arr) {
    let result = [];
    for(let i=0;i<arr.length;i++){
       if(typeof(arr[i]) === "number"){
           result.push(arr[i]);
       }
    }
  return result;
}

function reverseArray(arr) {
    return arr.slice().reverse().map(item => Array.isArray(item) ? deepRev(item) : item);
}

function findMax(arr) {
    if(arr.length === 0) return null;
    let result = arr[0];
  
    for(let i=0;i<arr.length;i++){
        if(arr[i] > result){
            result = arr[i];
        }
    }
  return result;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function flattenArray(arr) {
  let result = [];

    function flattenHelper(subArray) {
        for (let i = 0; i < subArray.length; i++) {
            if (Array.isArray(subArray[i])) {
                flattenHelper(subArray[i]); // ✅ Recursively flatten nested arrays
            } else {
                result.push(subArray[i]);  // ✅ Add non-array elements to result
            }
        }
    }

    flattenHelper(arr); // ✅ Start recursive flattening
    return result;
}

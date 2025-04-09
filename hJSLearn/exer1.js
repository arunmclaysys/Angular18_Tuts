
function filterNumbers(arr) {
    let result = [];
    for(let i=0;i<arr.length;i++){
       if(typeof(arr[i]) === "Number"){
           result.push(arr[i]);
       }
    }
  return result;
}

function reverseArray(arr) {
  return [...arr].reverse();
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
  return [...arr Set(Infinity)];
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

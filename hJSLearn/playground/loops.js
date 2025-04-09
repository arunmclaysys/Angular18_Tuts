/*
Loops
Task 1: Sum of First N Natural Numbers
Write a function sumOfN(n) that returns the sum of the first n natural numbers

Task 2: Multiplication Table
Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

Task 3: Count Vowels in a String
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

*/

function sumOfN(n) {
    let result = 0;
  for(let i = 0; i < n+1; i++){
      result = result + i;
  }
  return result;
}

function printMultiplicationTable(n) {
    let result = [];
    for(let i=1; i<11; i++){
        result.push(`${n} * ${i} = ${n*i}`);
    }
  return result;
}

function countVowels(str) {
    let vowels = ['a','e', 'i','o','u','A','E','I','O','U'];
    let result = 0;
    for(let i=0; i < str.length; i++){
        if(vowels.includes(str[i])){
            result += 1
        }
    }
    return result;
}

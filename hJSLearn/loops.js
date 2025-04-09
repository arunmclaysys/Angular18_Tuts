/*
//while loop
let i = 0;
let sum = 0;
while (i <= 5) {
    //console.log(i);
    sum = sum + i;
    i++;
}
console.log(sum);

//Whiile loop with array
let countDown = [];
let j = 5;
while (j > 0 && j <= 5) {
    countDown.push(j);
    j--;
}
console.log(countDown);

//Do-While loop
prompt does not work in Vs code, works in browser
let teaType = [];
var typeOfTea = '';
do {
    typeOfTea = prompt("Enter any type of tea, write stop to exit","stop");
    if (typeOfTea !== 'stop' && typeOfTea !== null) {
        teaType.push(typeOfTea);
    }
} while (typeOfTea !== 'stop' && typeOfTea !== null);

//Do-while - add and store in Array
let total = 0;
let k = 1; 
do {
    total = total + k;
    k++;
} while (k <= 3);
console.log(`Total is ${total}`);

//for loop
let multipliedNumbers = [];
let givenArray = [2,4,6];
for (let index = 0; index < givenArray.length; index++) {
    multipliedNumbers.push(Number(givenArray[index] * 2));
}
console.log(multipliedNumbers);

//for-loop
let oldCityList = ['ratnagiri','sikkim','ahmedabad','hosur'];
let cityList = oldCityList;
let cityList = [];
for (let index = 0; index < oldCityList.length; index++) {
    cityList.push(oldCityList[index]);    
}
console.log(cityList);

//for loop - do not contunite after ahmedabad
let oldCityList = ['ratnagiri','sikkim','ahmedabad','hosur'];
let updatedCityList = [];
for (let index = 0; index < oldCityList.length; index++) {
    if (oldCityList[index] === 'ahmedabad') {
        break;
    } else {
        updatedCityList.push(oldCityList[index]);
    }   
}
console.log(updatedCityList);

//for loop - skip ahmedabad
let oldCityList = ['ratnagiri','sikkim','ahmedabad','hosur'];
let updatedCityList = [];
for (let index = 0; index < oldCityList.length; index++) {
    if (oldCityList[index] === 'ahmedabad') {
        continue;
    } else {
        updatedCityList.push(oldCityList[index]);
    }   
}
console.log(updatedCityList);

//for-of loop
let sampleArray = [1,2,3,4,5];
let smallNumbers = [];
for (const e of sampleArray) {
    if (e === 4) {
        break;
    } else {
        smallNumbers.push(e);
    }
}
console.log(smallNumbers);

//for-of loop
let sampleArray = [1,2,3,4,5];
let smallNumbers = [];
for (const e of sampleArray) {
    if (e === 4) {
        continue;
    } else {
        smallNumbers.push(e);
    }
}
console.log(smallNumbers);

//for-in loop - we have not used it completely instead used work arounds
//here, since it is an object, we are trying to skip paris.
let citiesPopulation = {
    "London" : 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
let computedPopulation = {};
//This too works
for (const key in citiesPopulation) {
    if (key === 'Paris') {
        continue;
    } else {
        computedPopulation[key] = citiesPopulation[key];
    }
}
console.log(computedPopulation);
//Direct way
for (const key in citiesPopulation) {
    if (Object.prototype.hasOwnProperty.call(citiesPopulation, key)) {
        if (key === 'Paris') {
            continue;
        }
        computedPopulation[key] = citiesPopulation[key];
    }
}
console.log(computedPopulation);

//for-in loop
let citiesPopulation = {
    "London" : 8900000,
    "Berlin": 3500000,
    "New York": 8400000,
    "Paris": 2200000
};
let largeCities = {};
for (const city in citiesPopulation) {
    if (Object.prototype.hasOwnProperty.call(citiesPopulation, city)) {
        //const element = citiesPopulation[city];
        if(citiesPopulation[city] < 3800000){
            continue;
        } else {
            largeCities[city] = citiesPopulation[city];
        }
    }
}
console.log(largeCities);

//forEach
let oldCityList = ['ratnagiri','sikkim','ahmedabad','hosur'];
let newCityList = [];
oldCityList.forEach(element => {
    // if (element !== 'ahmedabad') {
    //     newCityList.push(element);
    // } 
    if (element === 'ahmedabad') {
        return;     //This return just exists out -- nothing happens and throws out of its memory
    }
    newCityList.push(element);
});
console.log(newCityList);

//for loop
sampleArray = [2,5,7,9];
doubledNumbers = [];
for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] === 7) {
        continue;
    }
    doubledNumbers.push(sampleArray[index] * 2);
}
console.log(doubledNumbers);
*/

//for-of
let oldCityList = ['ratnagiri','sikkim','bodh gaya','hosur','ahmedabad'];
let newCityList = [];
for (const element of oldCityList) {
    if(element.length < 6) {
        continue;
    } else {
        newCityList.push(element);
    }
}
console.log(newCityList);
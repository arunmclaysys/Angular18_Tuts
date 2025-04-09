function makeTea(typeOfTea) {
    return `Making ${typeOfTea}.`;
}
 
let teaOrder = makeTea("green tea");
//console.log(teaOrder);

function orderTea(teaType){
    function confirmOrder(teaType){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder(teaType);
}

let whateverIOrdered = orderTea("black coffee");
//console.log(whateverIOrdered);

//Good resource to check later -> javascript execution context

//Arrow function
// const calculateTotal = (price, quantity) => 
//     {return price*quantity};

function calculateTotal(price, quantity){
    return price*quantity;
}
const calculateTotal = (price, quantity) => price*quantity;

let totalCost = calculateTotal(20,10);
//console.log(totalCost);

//const processTeaOrder = () => {return makeTea("earl grey")};
//let teafn = processTeaOrder();
//console.log(teafn);

//other way of doing it - calling function as argument
function processTeaOrder(prepTea) {
    return prepTea("earl grey");   
    //pls note: prepTea is not a function, it is an imaginary thing which replaces existing fn named MakeTea
}
let teafn = processTeaOrder(makeTea);
//console.log(teafn);

// function createTeamaker(someFunc) {
//     return someFunc("green tea");
// }
// let teaMaker = createTeamaker(makeTea);
const makesTea = (typeOfTea) => `Making ${typeOfTea}.`;

const createTeamaker = (someFunc, teaType) => someFunc(teaType);

let selectTea = "green tea";
let teaMaker = createTeamaker(makesTea, selectTea);

console.log(teaMaker); // Output: "Making green tea."



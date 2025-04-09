//alert("connected");

//Example 1
document
    .getElementById("changeTextButton")
    .addEventListener("click",function () {
        let selectedPara = document.getElementById("myParagraph");
        selectedPara.textContent = "Modified haha!";
    });

//Example 2
document
    .getElementById("highlightFirstCity")
    .addEventListener("click", function () {
        let citiesList = document.getElementById("citiestist");
        citiesList.firstElementChild.classList.add("highlight");
    });

//Example 3
document
    .getElementById("changeOrder")
    .addEventListener("click", function () {
        let currentVal = document.getElementById("coffeeType");
        currentVal.textContent = "Expresso";
        currentVal.style.backgroundColor = "cyan";
        currentVal.style.padding = "20px";
    });

//Example 4
document
    .getElementById("addNewItem")
    .addEventListener("click", function () {
        let newItemAdded = document.createElement("li");
        newItemAdded.textContent = "Butter";
        //document.getElementById("shoppingList").appendChild(newItemAdded);
        let theUnorderdedList = document.getElementById("shoppingList");
        theUnorderdedList.appendChild(newItemAdded);
        });

//Example 5
document
    .getElementById("removeLastTask")
    .addEventListener("click", function () {
        let childToRemoveFrom = document.getElementById("taskList");
        childToRemoveFrom.lastElementChild.remove();
    });

//Example 6
document
    .getElementById("clickMeButton")
    .addEventListener("dblclick", function () {
        alert("got you !!!");
    });

//Example 7
document
    .getElementById("teaList")
    .addEventListener("click", function (event) {
        let selectedItemFromUI = event.target;
        if (event.target && event.target.matches(".teaItem")) {
            alert("selected value is " + event.target.textContent);
        }
        selectedItemFromUI.style.backgroundColor = "red";
});

//Example 8
document
    .getElementById("feedbackForn")
    .addEventListener("submit",function (event) {
        event.preventDefault();
        let feedbackGiven = document.getElementById("feedbackInput").value;
        let areaTodisplay = document.getElementById("feedbackDisplay");
        areaTodisplay.textContent = ` The feedback given is : ${feedbackGiven}.`;
});

//Example 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded"; 
});

//Example 10
document
    .getElementById("toggleHighlight")
    .addEventListener("click", function (event) {
        let cssChange = document.getElementById("descriptionText");
        cssChange.classList.toggle("highlight");
        //cssChange.style.backgroundColor = "brown";
    });
//selecting the HTML elements I will work with in my JS file
let btn = document.getElementById("btn");
let outcome = document.getElementById("outcome");


//The function that will be triggered when I click the button
function generateFlags() {
    let firstButton = document.getElementById("btn");
    firstButton.innerHTML = "Next";
    firstButton.classList.add("next");
    firstButton.style.backgroundColor = "blueviolet";
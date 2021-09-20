// KF Panda Character Search

// Variables for HTML Elements
let searchBtnEl = document.getElementById("searchBtn");
let charImgEl = document.getElementById("charImg");
let nameInEl = document.getElementById("nameIn")
let charNameEl = document.getElementById("charName")
let charQuoteEl = document.getElementById("charQuote")

// Add Event Listener
searchBtnEl.addEventListener("click", characterSearch);

// Event Function
function characterSearch() {
    // Get Input
    let name = nameInEl.value;
    name = name.toLowerCase();

    // Check the name
    if (name === "po" || name === "dragon warrior" || name === "the dragon warrior") {
        charImgEl.src = "images/po.png";
        charNameEl.innerHTML = "Po";
        charQuoteEl.innerHTML = "\"Buddy, I am the Dragon Warrior.\"";
    } else if (name === "viper" || name === "master viper") {
        charImgEl.src = "images/viper.png";
        charNameEl.innerHTML = "Viper";
        charQuoteEl.innerHTML = "\"I don't need to bite to fight!\"";
    } else if (name === "mantis") {
        charImgEl.src = "images/mantis.png";
        charNameEl.innerHTML = "Mantis";
        charQuoteEl.innerHTML = "\"Fear the bug!\"";
    } else if (name === "tigress") {
        charImgEl.src = "images/tigress.png";
        charNameEl.innerHTML = "Tigress";
        charQuoteEl.innerHTML = "\"That was pretty hardcore!\"";
    } else if (name === "monkey") {
        charImgEl.src = "images/monkey.png";
        charNameEl.innerHTML = "Monkey";
        charQuoteEl.innerHTML = "\"We should hang out!\"";
    } else if (name === "crane") {
        charImgEl.src = "images/crane.png";
        charNameEl.innerHTML = "Crane";
        charQuoteEl.innerHTML = "\"You can chain my body, but you will never chain my warrior spirit!\"";
    } else {
        charImgEl.src = "images/question-mark.png";
        charNameEl.innerHTML = "Huh?";
        charQuoteEl.innerHTML = "\"Character not found.\"";
    }
}
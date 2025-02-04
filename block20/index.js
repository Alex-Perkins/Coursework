// State
const state = {
    bank: [],
    evensBank: [],
    oddsBank: [],
}

// Prompt 1: Create HTML References
// Pt. 1 (Number Bank)
const form = document.querySelector("form");
const total = document.querySelector("output");

// Pt. 2 (Sort Buttons
const main = document.querySelector("main");
const evensSection = document.getElementById("odds").querySelector("output");
const oddsSection = document.getElementById("evens").querySelector("output");

// Prompt 2: Add event listeners
// Pt. 1 (Number Bank)
form.addEventListener('submit', addNumbers);
// Pt. 2 (Sort One Btn)
document.getElementById("sortOne").addEventListener('click', sortOneBtn);
// Pt. 3 (Sort All Btn)
document.getElementById("sortAll").addEventListener('click', sortAllBtn);

// Prompt 3: Create renderNumbers function
function renderNumbers(numberBank, element) {
    const stringNumberBank = numberBank.toString();
    element.textContent = stringNumberBank;
}

// Prompt 4: Create addNumbers function
function addNumbers(event) {
    //prevent page from refreshing
    event.preventDefault();
    //grab number from the form
    const theNumber = form.elements.number.value;
    //push theu number into the number bank with the string value
    if (parseInt(theNumber)) {
        state.bank.push(theNumber);
        //render the numbers to the form
        renderNumbers(state.bank, total);
    }
    //clear the form
    form.elements.number.value = [];
}

// Prompt 5: Create renderOdds Function
function renderOdds(NBO, element) {
    const stringOddsBank = NBO.toString();
    element.textContent = stringOddsBank;
}

// Prompt 6: Create renderEvens Function
//console.log(numberBank);
function renderEvens(NBE, element) {
    const stringEvensBank = NBE.toString();
    element.textContent = stringEvensBank;
}

// Prompt 7: Create sortOneBtn Function
function sortOneBtn(event) {
    event.preventDefault();
    const theNumberInBank = state.bank.shift();
    if ((theNumberInBank) % 2 === 0) {
        state.oddsBank.push(theNumberInBank)
    }
    else {
        state.evensBank.push(theNumberInBank);
    }
    renderEvens(state.evensBank, evensSection);
    renderOdds(state.oddsBank, oddsSection);
    renderNumbers(state.bank, total);
}

// Prompt 8: Create sortAllBtn Function
function sortAllBtn(event) {
    event.preventDefault();
    state.bank.forEach(num => {
        if ((num) % 2 === 0 ) {
            state.evensBank.push(num);
        }
        else {
            state.oddsBank.push(num);
        }
        state.bank = [];
    });
  
    renderEvens(state.evensBank, evensSection);
    renderOdds(state.oddsBank, oddsSection);
    renderNumbers(state.bank, total);
}

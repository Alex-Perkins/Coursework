// Create prompt
const userInput = prompt("Enter your froyo flavors seperated by commas:");



// Create table containing how many of each flavor the customer has ordered
// User Input --> vanilla,vanilla,vanilla,strawberry,coffee,coffee



// Split userInput using ,
const order = userInput.split(",");
console.log(order);


// Create Function to store order data
function orderID (order) {
    // Create empty object
    let Froyo = {};
    // Loop object over array
    for (let i = 0; i < order.length; i++) {
    // Add each flavor as a key, with a value of 1 if the key already does not exist, otherwise add 1 to the current value.
        // obj[key] = obj[key]++ || obj[key] +=1
        if (Froyo[order[i]] > 0) {
        Froyo[order[i]] +=1
        }
        else {
            Froyo[order[i]] = 1
        }
}
    // Return obj created above
    return Froyo
};

  // Add a console.table
console.table (orderID(order))

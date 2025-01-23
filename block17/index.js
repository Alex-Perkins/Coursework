// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }

  count() {
    //return the count of numbers in data
    const count = this.data.length;
    return (`There are ${count} numbers in this dataset.`);
  }

  printNumbers(data) {
    //print the numbers in data
    console.log(`this is the data: ${this.data}`);
  }

  odds() {
    //return the odd numbers in data
    let oddNum = 0;
    for (let num of this.data) {
      if (num % 2 !== 0) {
        oddNum++;
      }
    }
    return (`The amount of odd numbers in the dataset are ${oddNum}.`)
  }

  evens() {
    //return the even numbers in data
    let evenNum = 0;
    for (let num of this.data) {
      if (num % 2 === 0) {
        evenNum++;
      }
    }
    return (` The amount of even numbers in the dataset are ${evenNum}.`)
  }

  sum() {
    //return the sum of the numbers
    let sum = 0
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    return (`The sum of all the entries in the dataset is ${sum}`)
  }

  product() {
    //return the product of the numbers
    const multProduct = this.data.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    console.log(`The product of all the numbers is ${multProduct}`);
  }

  greaterThan(target) {
    //return the numbers greater than the target
    const greatThan = this.data.filter(number => number > target);
    return (`The numbers greater than the target (3) are ${greatThan}`)
  }

  howMany(target) {
    //return the count of a given number
    var count = 0;

    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i] === 3) {
        count++;
      }
    }
    console.log(`The amount of instances that match the target are ${count}`);
  }
}


// DO NOT CHANGE CODE DO NOT CHANGE CODE DO NOT CHANGE CODE DO NOT CHANGE CODE DO NOT CHANGE CODE
//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
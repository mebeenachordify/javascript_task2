const prompt = require("prompt-sync")();


function main() {
  let myArray = [];
  getArray(myArray);
  displayArray(myArray);
}

function getArray(arr) {
 
  let numValues = prompt("Enter the number of values you want to add to the array:")
  console.log(numValues);

  for (let i = 0; i < numValues; i++) {
    let value = prompt(`Enter value ${i + 1}:`);
    arr.push(value);
  }
}

function displayArray(arr) {
  
  console.log("Array values:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

main();
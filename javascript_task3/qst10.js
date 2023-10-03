const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getInputArray(promptMessage, callback) {
  rl.question(promptMessage, (input) => {
    const inputArray = input.split(',').map(Number);
    callback(inputArray);
  });
}

function swapArrays(arr1, arr2) {
  const temp = [...arr1];
  arr1.length = 0;
  arr1.push(...arr2);
  arr2.length = 0;
  arr2.push(...temp);
}


console.log("Enter the size of arrays");
rl.question("Input: ", (size) => {
  size = parseInt(size);

  console.log("Enter the values of Array 1");
  getInputArray("Input: ", (array1) => {
    console.log("Enter the values of Array 2");
    getInputArray("Input: ", (array2) => {
      console.log("Arrays before swapping:");
      console.log("Array1: " + array1.join(', '));
      console.log("Array2: " + array2.join(', '));

      swapArrays(array1, array2);

      console.log("Arrays after swapping:");
      console.log("Array1: " + array1.join(', '));
      console.log("Array2: " + array2.join(', '));

      rl.close();
    });
  });
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function createArray(size) {
  const arr = [];
  return new Promise((resolve) => {
    function inputRow(index) {
      if (index === size) {
        resolve(arr);
        return;
      }
      rl.question(`Enter values for row ${index + 1} (space-separated): `, (input) => {
        const row = input.split(' ').map(Number);
        if (row.length === size) {
          arr.push(row);
          inputRow(index + 1);
        } else {
          console.log(`Please enter ${size} values for this row.`);
          inputRow(index);
        }
      });
    }
    inputRow(0);
  });
}


function addArrays(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(row);
  }
  return result;
}


rl.question("Enter the size of arrays: ", (sizeInput) => {
  const size = parseInt(sizeInput);
  console.log("Enter the values of array 1:");
  createArray(size)
    .then((array1) => {
      console.log("Enter the values of array 2:");
      return createArray(size).then((array2) => [array1, array2]);
    })
    .then(([array1, array2]) => {
      const sumArray = addArrays(array1, array2);
      console.log("Sum of 2 arrays is:");
      for (let i = 0; i < size; i++) {
        console.log(sumArray[i].join(" "));
      }
      rl.close();
    });
});

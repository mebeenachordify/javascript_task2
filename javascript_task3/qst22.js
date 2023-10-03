const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getArray(rows, cols, callback) {
  let arr = [];
  console.log(`Enter the values of the array (${rows}x${cols}):`);
  let currentRow = 0;

  function getInputRow() {
    rl.question(`Enter values for row ${currentRow + 1} (separated by space): `, (inputRow) => {
      let values = inputRow.split(' ').map(value => parseInt(value));
      if (values.length === cols) {
        arr.push(values);
        currentRow++;
      } else {
        console.log(`Please enter ${cols} values.`);
      }

      if (currentRow < rows) {
        getInputRow();
      } else {
        callback(arr);
      }
    });
  }

  getInputRow();
}


function addArray(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(row);
  }
  return result;
}


function displayArray(arr) {
  console.log("Sum of array 1 and array 2:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(' '));
  }
}


function main() {
  rl.question("Enter the size of the array: ", (size) => {
    size = parseInt(size);
    getArray(size, size, (array1) => {
      getArray(size, size, (array2) => {
        let sumArray = addArray(array1, array2);
        displayArray(sumArray);
        rl.close();
      });
    });
  });
}


main();

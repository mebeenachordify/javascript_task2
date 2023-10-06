function getInputArray(promptMessage, callback) {
  const input = prompt(promptMessage);
  const inputArray = input.split(',');
  callback(inputArray);
}

function swapArrays(arr1, arr2) {
  const temp = [...arr1];
  arr1.length = 0;
  arr1.push(...arr2);
  arr2.length = 0;
  arr2.push(...temp);
}

console.log("Enter the size of arrays");
const size = parseInt(prompt("Input: "));

getInputArray("Input: ", (array1) => {
  getInputArray("Input: ", (array2) => {
    console.log("Arrays before swapping:");
    console.log("Array1: " + array1.join(', '));
    console.log("Array2: " + array2.join(', '));

    swapArrays(array1, array2);

    console.log("Arrays after swapping:");
    console.log("Array1: " + array1.join(', '));
    console.log("Array2: " + array2.join(', '));
  });
});


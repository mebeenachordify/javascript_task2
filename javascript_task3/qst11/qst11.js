function evenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

function main() {
  const size = prompt('Enter the size of the array:');
  const sizeNum = parseInt(size);

  if (isNaN(sizeNum) || sizeNum <= 0) {
    console.log('Invalid input!!!!!');
    return;
  }

  const input = prompt('Enter the values of the array (comma-separated):');
  const values = input.split(',').map((num) => parseInt(num.trim()));

  if (values.some(isNaN)) {
    console.log('Invalid input!!!');
  } else {
    const evenNum = evenNumbers(values);
    console.log(`Number of even numbers in the given array is ${evenNum}`);
  }
}

main();

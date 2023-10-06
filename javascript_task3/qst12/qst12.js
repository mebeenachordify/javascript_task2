function sortDescending(arr) {
  return arr.sort(function(a, b) {
    return b - a;
  });
}

function readInput() {
  const size = prompt('Enter the size of an array:');
  const sizeInt = parseInt(size);

  if (isNaN(sizeInt)) {
    alert('Please enter a valid number for the size of the array.');
    return;
  }

  const values = prompt('Enter the values of the array (comma-separated):');
  const arr = values.split(',');

  if (arr.length !== sizeInt) {
    alert('Invalid!!!');
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i].trim());
  }

  const sortedArray = sortDescending(arr);

  console.log('Sorted array:');
  console.log(sortedArray.join(', '));
}

readInput();

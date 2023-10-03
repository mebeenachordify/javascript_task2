function sortDescending(arr) {
    return arr.sort(function(a, b) {
      return b - a;
    });
  }
  
    function readInput() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Enter the size of an array: ', function(size) {
      size = parseInt(size);
      rl.question('Enter the values of the array (comma-separated): ', function(values) {
        const arr = values.split(',').map(value => parseInt(value.trim()));
        const sortedArray = sortDescending(arr);
  
        console.log('Sorted array:');
        console.log(sortedArray.join(', '));
  
        rl.close();
      });
    });
  }
  
    readInput();
  
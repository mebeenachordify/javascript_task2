function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        count++;
      }
    }
    return count;
  }
  
    function main() {
    const readline = require('readline');
  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Enter the size of the array: ', (size) => {
      const sizeNum = parseInt(size);
  
      if (isNaN(sizeNum) || sizeNum <= 0) {
        console.log('Invalid input. Please enter a valid positive integer for the size of the array.');
        rl.close();
      } else {
        rl.question('Enter the values of the array (comma-separated): ', (input) => {
          const values = input.split(',').map((num) => parseInt(num.trim()));
  
          if (values.some(isNaN)) {
            console.log('Invalid input. Please enter valid numeric values for the array elements.');
          } else {
            const evenCount = countEvenNumbers(values);
            console.log(`Number of even numbers in the given array is ${evenCount}`);
          }
  
          rl.close();
        });
      }
    });
  }
  
  
  main();
  
function multiplyAdjacentValues(inputArray) {
    const resultArray = [];
  
    for (let i = 0; i < inputArray.length - 1; i++) {
      const product = inputArray[i] * inputArray[i + 1];
      resultArray.push(product);
    }
  
    return resultArray;
  }
  
  
  function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Enter the array limit: ', (limit) => {
      const arrayLimit = parseInt(limit);
  
      rl.question('Enter the values of array (space-separated): ', (input) => {
        const inputArray = input.split(' ').map(Number);
  
        if (inputArray.length !== arrayLimit) {
          console.log('The number of values entered does not match the array limit.');
        } else {
          const resultArray = multiplyAdjacentValues(inputArray);
          console.log('Output:');
          console.log(resultArray.join(' '));
        }
  
        rl.close();
      });
    });
  }
  
  
  main();
  
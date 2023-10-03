const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumOfOddNumbers(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
  }

  return sum;
}


rl.question("Enter a limit: ", (answer) => {
  const limit = parseInt(answer);

  
  const result = sumOfOddNumbers(limit);
  console.log("Sum of odd numbers =", result);

  rl.close();
});

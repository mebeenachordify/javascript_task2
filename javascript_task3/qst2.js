const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an integer (Number 1): ", function(input1) {
  input1 = parseInt(input1);

  rl.question("Enter a float (Number 2): ", function(input2) {
    input2 = parseFloat(input2);

    if (isNaN(input1) || isNaN(input2)) {
      console.log("Invalid input. Please enter valid numbers.");
    } else {
      const sum = input1 + input2;
      console.log("Sum as float: " + sum);
    }

    rl.close();
  });
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your total mark percentage: ", function(input) {
  const totalMarkPercentage = parseFloat(input);

  if (isNaN(totalMarkPercentage)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    let grade;
    if (totalMarkPercentage >= 90) {
      grade = "A";
    } else if (totalMarkPercentage >= 80) {
      grade = "B";
    } else if (totalMarkPercentage >= 70) {
      grade = "C";
    } else if (totalMarkPercentage >= 60) {
      grade = "D";
    } else if (totalMarkPercentage >= 50) {
      grade = "E";
    } else {
      grade = "Failed";
    }

    console.log(`Your grade is: ${grade}`);
  }

  rl.close();
});

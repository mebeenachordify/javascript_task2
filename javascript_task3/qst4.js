const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your mark (out of 100): ', (input) => {
  
  const mark = parseFloat(input);

    if (!isNaN(mark)) {
      if (mark >= 50) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

  rl.close();
});

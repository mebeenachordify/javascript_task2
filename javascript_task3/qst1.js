const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a character: ', (userInput) => {
  if (userInput.length === 1) {
    console.log('You entered: ' + userInput);
  } else {
    console.log('Invalid input. Please enter a single character.');
  }

  readline.close();
});

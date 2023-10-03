const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  
  
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

rl.question("Enter a number: ", function(userInput) {
  const number = parseInt(userInput);

  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else if (isPrime(number)) {
    console.log(`Entered number ${number} is a Prime number.`);
  } else {
    console.log(`Entered number ${number} is not a Prime number.`);
  }

  rl.close();
});

function sumOfOddNumbers(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

const userInput = prompt("Enter a limit: ");
const limit = parseInt(userInput);

if (!isNaN(limit)) {
  const result = sumOfOddNumbers(limit);
  console.log("Sum of odd numbers =", result);
} else {
  console.log("Invalid input. Please enter a valid number.");
}


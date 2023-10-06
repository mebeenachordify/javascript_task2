const input = prompt('Enter your mark (out of 100): ');
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

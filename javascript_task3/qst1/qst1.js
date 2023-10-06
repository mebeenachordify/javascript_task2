const userInput = prompt('Enter a character:');

if (userInput !== null) {
  if (userInput.length === 1) {
    console.log('You entered: ' + userInput);
  } else {
    console.log('Invalid input. Please enter a single character.');
  }
} else {
  console.log('User canceled the input.');
}

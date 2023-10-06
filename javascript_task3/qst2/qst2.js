function getInput() {
  const input1 = prompt("Enter an integer (Number 1): ");
  const input2 = prompt("Enter a float (Number 2): ");

  const parsedInput1 = parseInt(input1);
  const parsedInput2 = parseFloat(input2);

  if (isNaN(parsedInput1) || isNaN(parsedInput2)) {
    alert("Invalid input. Please enter valid numbers.");
  } else {
    const sum = parsedInput1 + parsedInput2;
    alert("Sum as float: " + sum);
  }
}

getInput();
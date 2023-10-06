class Calculator {
  addition(num1, num2) {
    return num1 + num2;
  }

  subtraction(num1, num2) {
    return num1 - num2;
  }

  multiplication(num1, num2) {
    return num1 * num2;
  }

  division(num1, num2) {
    if (num2 === 0) {
      return "Division by zero is not allowed.";
    }
    return num1 / num2;
  }
}

function main() {
  const calculator = new Calculator();

  console.log("Menu:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Exit");

  const choice = parseInt(prompt("Enter your choice:"));

  if (isNaN(choice) || choice < 1 || choice > 5) {
    alert("Invalid choice. Please enter a valid option.");
    return;
  }

  if (choice === 5) {
    alert("Exiting the program.");
    return;
  }

  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter valid numbers.");
  } else {
    switch (choice) {
      case 1:
        alert(`Result: ${calculator.addition(num1, num2)}`);
        break;
      case 2:
        alert(`Result: ${calculator.subtraction(num1, num2)}`);
        break;
      case 3:
        alert(`Result: ${calculator.multiplication(num1, num2)}`);
        break;
      case 4:
        alert(`Result: ${calculator.division(num1, num2)}`);
        break;
    }
  }
}

main();
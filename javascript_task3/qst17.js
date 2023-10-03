const readline = require('readline');

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

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Menu:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Exit");

  rl.question("Enter your choice: ", (choice) => {
    choice = parseInt(choice);

    if (isNaN(choice) || choice < 1 || choice > 5) {
      console.log("Invalid choice. Please enter a valid option.");
      rl.close();
      return;
    }

    if (choice === 5) {
      console.log("Exiting the program.");
      rl.close();
      return;
    }

    rl.question("Enter the first number: ", (num1) => {
      num1 = parseFloat(num1);

      rl.question("Enter the second number: ", (num2) => {
        num2 = parseFloat(num2);

        if (isNaN(num1) || isNaN(num2)) {
          console.log("Invalid input. Please enter valid numbers.");
        } else {
          switch (choice) {
            case 1:
              console.log(`Result: ${calculator.addition(num1, num2)}`);
              break;
            case 2:
              console.log(`Result: ${calculator.subtraction(num1, num2)}`);
              break;
            case 3:
              console.log(`Result: ${calculator.multiplication(num1, num2)}`);
              break;
            case 4:
              console.log(`Result: ${calculator.division(num1, num2)}`);
              break;
          }
        }

        rl.close();
      });
    });
  });
}

main();

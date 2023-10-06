const userInput = prompt("Enter a number:");
    const number = parseInt(userInput);

    if (isNaN(number)) {
      alert("Invalid input. Please enter a valid number.");
    } else if (number <= 1) {
      alert(`Entered number ${number} is not a Prime number.`);
    } else {
      let isPrime = true;
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        alert(`Entered number ${number} is a Prime number.`);
      } else {
        alert(`Entered number ${number} is not a Prime number.`);
      }
    }
const input = prompt("Enter your total mark percentage:");
    const totalMarkPercentage = parseFloat(input);

    if (isNaN(totalMarkPercentage)) {
      alert("Invalid input. Please enter a valid number.");
    } else {
      let grade;
      if (totalMarkPercentage >= 90) {
        grade = "A";
      } else if (totalMarkPercentage >= 80) {
        grade = "B";
      } else if (totalMarkPercentage >= 70) {
        grade = "C";
      } else if (totalMarkPercentage >= 60) {
        grade = "D";
      } else if (totalMarkPercentage >= 50) {
        grade = "E";
      } else {
        grade = "Failed";
      }

           alert("Your grade is: " + grade);

    }
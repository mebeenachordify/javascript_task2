const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number between 1 and 7: ", (userInput) => {
  userInput = parseInt(userInput);

  let dayOfWeek;

  switch (userInput) {
    case 1:
      dayOfWeek = "Sunday";
      break;
    case 2:
      dayOfWeek = "Monday";
      break;
    case 3:
      dayOfWeek = "Tuesday";
      break;
    case 4:
      dayOfWeek = "Wednesday";
      break;
    case 5:
      dayOfWeek = "Thursday";
      break;
    case 6:
      dayOfWeek = "Friday";
      break;
    case 7:
      dayOfWeek = "Saturday";
      break;
    default:
      dayOfWeek = "Invalid Entry";
      break;
  }

  console.log(dayOfWeek);

  rl.close();
});

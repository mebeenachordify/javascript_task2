const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', function (input) {
  var number = parseInt(input);

  if (!isNaN(number)) {
    for (var i = 1; i <= 10; i++) {
      var result = number * i;
      console.log(i + ' x ' + number + ' = ' + result);
    }
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }

  rl.close();
});

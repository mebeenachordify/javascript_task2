const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your height: ', (my_height) => {
  try {
    my_height = parseFloat(my_height);

    if (isNaN(my_height)) {
      throw "notANumberError";
    } else if (my_height > 100) {
      throw "HugeHeightError";
    } else if (my_height < 10) {
      throw "TinyHeightError";
    } else {
      console.log(my_height);
    }
  } catch (error) {
    console.log(error);
  }

  rl.close();
});

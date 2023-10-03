const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Array2D {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];
  }

 
  getArray() {
    console.log(`Enter ${this.rows * this.cols} array values:`);
    rl.question(`Enter values separated by spaces: `, (input) => {
      const values = input.split(' ').map(Number);
      for (let i = 0; i < this.rows; i++) {
        this.data.push([]);
        for (let j = 0; j < this.cols; j++) {
          const value = values[i * this.cols + j];
          this.data[i].push(value);
        }
      }
      rl.close();
      this.displayArray();
    });
  }

  
  displayArray() {
    console.log("Array elements are:");
    for (let i = 0; i < this.rows; i++) {
      console.log(this.data[i].join(' '));
    }
  }
}


function main() {
  rl.question("Enter the size of array: ", (size) => {
    const array = new Array2D(parseInt(size), parseInt(size));
    array.getArray();
  });
}
main();

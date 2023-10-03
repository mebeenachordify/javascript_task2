class Area {
    circle(radius) {
      return Math.PI * radius * radius;
    }
  
    square(side) {
      return side * side;
    }
  
    rectangle(length, width) {
      return length * width;
    }
  
    triangle(base, height) {
      return 0.5 * base * height;
    }
  }
  
  class MyClass extends Area {
    static main() {
      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
  
      rl.question('Enter your choice (Circle, Square, Rectangle, Triangle): ', (choice) => {
        const myClassInstance = new MyClass(); 
        switch (choice.toLowerCase()) {
          case 'circle':
            rl.question('Enter the radius: ', (radius) => {
              const area = myClassInstance.circle(radius);
              console.log(`Area of the circle is: ${area.toFixed(2)}`);
              rl.close();
            });
            break;
          case 'square':
            rl.question('Enter the side length: ', (side) => {
              const area = myClassInstance.square(side);
              console.log(`Area of the square is: ${area}`);
              rl.close();
            });
            break;
          case 'rectangle':
            rl.question('Enter the length: ', (length) => {
              rl.question('Enter the width: ', (width) => {
                const area = myClassInstance.rectangle(length, width);
                console.log(`Area of the rectangle is: ${area}`);
                rl.close();
              });
            });
            break;
          case 'triangle':
            rl.question('Enter the base length: ', (base) => {
              rl.question('Enter the height: ', (height) => {
                const area = myClassInstance.triangle(base, height);
                console.log(`Area of the triangle is: ${area}`);
                rl.close();
              });
            });
            break;
          default:
            console.log('Invalid choice');
            rl.close();
            break;
        }
      });
    }
  }
  
  MyClass.main();
  
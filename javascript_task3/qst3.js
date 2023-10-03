const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function calculateSimpleInterest() {
  rl.question("Enter the Principal amount (P): ", (principal) => {
    rl.question("Enter the Interest rate (R): ", (rate) => {
      rl.question("Enter the Number of years (n): ", (years) => {
        
        const P = parseFloat(principal);
        const R = parseFloat(rate);
        const n = parseFloat(years);

        
        const SI = (P * R * n) / 100;

        
        console.log(`Simple Interest (SI): ${SI}`);

        
        rl.close();
      });
    });
  });
}

calculateSimpleInterest();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

rl.question("Enter a string: ", (inputString) => {
    
    if (isPalindrome(inputString)) {
        console.log("Entered string is a palindrome");
    } else {
        console.log("Entered string is not a palindrome");
    }

   
    rl.close();
});

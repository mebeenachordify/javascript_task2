const inputString = prompt("Enter a string:");

const cleanStr = inputString.replace(/\s/g, "").toLowerCase();

const reversedStr = cleanStr.split('').reverse().join('');

if (cleanStr === reversedStr) {
    alert("Entered string is a palindrome");
} else {
    alert("Entered string is not a palindrome");
}

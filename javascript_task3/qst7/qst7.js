function MultiplicationTable() {
  var input = prompt('Enter a number:');
  var number = parseInt(input);

  if (!isNaN(number)) {
    for (var i = 1; i <= 10; i++) {
      var result = number * i;
      console.log(i + ' x ' + number + ' = ' + result);
    }
  } else {
    alert('Invalid input. Please enter a valid number.');
  }
}
window.onload = function() {
  MultiplicationTable();
};

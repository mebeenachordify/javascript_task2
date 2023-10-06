 const userInput = prompt("Enter a number between 1 and 7:");
 const userInputInt = parseInt(userInput);

 let dayOfWeek;

 switch (userInputInt) {
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
 alert(dayOfWeek);
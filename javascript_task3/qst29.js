function myFilter(myArray, callback) {
    let sum = 0;
  
    for (let i = 0; i < myArray.length; i++) {
      sum += myArray[i];
    }
  
    return callback(sum);
  }
   
  function isSumEven(sum) {
    return sum % 2 === 0;
  }
  
   const myArray = [1, 2, 3, 4, 5];
  
  const result = myFilter(myArray, isSumEven);

  console.log(result); 
  
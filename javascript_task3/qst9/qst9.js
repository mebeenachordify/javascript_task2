const numOfRows = 5;
  
  for (let i = 1; i <= numOfRows; i++) {
    let rowOutput = '';

    for (let j = 1; j <= i; j++) {
      rowOutput += j;
    }
    console.log(rowOutput);
  
} 

function calculateGrade(writtenTestScore, labExamScore, assignmentScore) {
    const writtenTestWeight = 0.7;
    const labExamWeight = 0.2;
    const assignmentWeight = 0.1;
  
    
    const weightedAverage = (writtenTestScore * writtenTestWeight) +
                           (labExamScore * labExamWeight) +
                           (assignmentScore * assignmentWeight);
  
    
    const grade = weightedAverage.toFixed(1);
  
    return grade;
  }
  
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Enter the marks scored by the student\nWritten test = ", (writtenTest) => {
    rl.question("Lab exams = ", (labExam) => {
      rl.question("Assignments = ", (assignment) => {
        
        const writtenTestScore = parseFloat(writtenTest);
        const labExamScore = parseFloat(labExam);
        const assignmentScore = parseFloat(assignment);
  
        
        if (!isNaN(writtenTestScore) && !isNaN(labExamScore) && !isNaN(assignmentScore)) {
          const grade = calculateGrade(writtenTestScore, labExamScore, assignmentScore);
          console.log(`Grade of the student is ${grade}`);
        } else {
          console.log("Invalid input. Please enter numeric scores.");
        }
  
       
        rl.close();
      });
    });
  });
  
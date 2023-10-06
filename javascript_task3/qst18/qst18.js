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

const writtenTest = parseFloat(prompt("Enter marks scored in the written test:"));
const labExam = parseFloat(prompt("Enter marks scored in lab exams:"));
const assignment = parseFloat(prompt("Enter marks scored in assignments:"));

if (!isNaN(writtenTest) && !isNaN(labExam) && !isNaN(assignment)) {
  const grade = calculateGrade(writtenTest, labExam, assignment);
  alert(`Grade of the student is ${grade}`);
} else {
  alert("Invalid input. Please enter numeric scores.");
}
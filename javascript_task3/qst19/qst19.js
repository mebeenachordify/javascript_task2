function calculateIncomeTax(annualIncome) {
  let taxAmount = 0;

  if (annualIncome <= 250000) {
    taxAmount = 0;
  } else if (annualIncome <= 500000) {
    taxAmount = (annualIncome - 250000) * 0.05;
  } else if (annualIncome <= 1000000) {
    taxAmount = 250000 * 0.05 + (annualIncome - 500000) * 0.20;
  } else {
    taxAmount = 250000 * 0.05 + 500000 * 0.20 + (annualIncome - 1000000) * 0.30;
  }

  return taxAmount;
}

const income = prompt('Enter the annual income:');
const annualIncome = parseFloat(income);

if (isNaN(annualIncome)) {
  alert('Invalid input. Please enter a valid annual income.');
} else {
  const taxAmount = calculateIncomeTax(annualIncome);
  alert(`Income tax amount = ${taxAmount.toFixed(2)}`);
}

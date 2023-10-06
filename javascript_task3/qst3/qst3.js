function calculateSimpleInterest() {
  const principal = parseFloat(prompt("Enter the Principal amount (P):"));
  const rate = parseFloat(prompt("Enter the Interest rate (R):"));
  const years = parseFloat(prompt("Enter the Number of years (n):"));

  if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
    alert("Please enter valid numeric values for Principal, Rate, and Years.");
    return;
  }
  const SI = (principal * rate * years) / 100;

  alert(`Simple Interest (SI): ${SI.toFixed(2)}`);
}

calculateSimpleInterest();

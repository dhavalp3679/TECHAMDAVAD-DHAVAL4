
function calculateBalance() {
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);

  let remainingBalance = income - expenses;

  const resultText = `Remaining balance: ₹${remainingBalance.toFixed(2)}`;
  document.getElementById('balance').innerHTML = resultText;
}

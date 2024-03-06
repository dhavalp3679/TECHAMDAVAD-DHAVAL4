function calculateTotal() {
  const billAmount = parseFloat(document.getElementById('billAmount').value);
  const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

  const tipAmount = billAmount * (tipPercentage / 100);
  const totalBill = billAmount + tipAmount;

  const resultText = `Total bill including ${tipPercentage}% tip: ₹${totalBill.toFixed(2)}`;
  document.getElementById('totalBill').innerHTML = resultText;
}

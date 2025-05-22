// addIncome.js

function addIncome() {
  const amount = prompt("Enter income amount:");
  const reason = prompt("Enter income reason:");
  const value = parseFloat(amount);

  if (!isNaN(value) && value > 0 && reason.trim() !== "") {
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    let balance = parseFloat(localStorage.getItem("balance")) || 0;
    let income = parseFloat(localStorage.getItem("income")) || 0;

    balance += value;
    income += value;

    transactions.push({ type: "Income", amount: value, reason: reason });

    localStorage.setItem("balance", balance);
    localStorage.setItem("income", income);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    alert(`Income of ₹${value} added for reason: ${reason}`);
    window.location.reload(); // reload UI
  } else {
    alert("Please enter valid amount and reason.");
  }
}

// addExpense.js

function addExpense() {
  const amount = prompt("Enter expense amount:");
  const reason = prompt("Enter expense reason:");
  const value = parseFloat(amount);

  if (!isNaN(value) && value > 0 && reason.trim() !== "") {
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    let balance = parseFloat(localStorage.getItem("balance")) || 0;
    let expense = parseFloat(localStorage.getItem("expense")) || 0;

    balance -= value;
    expense += value;

    transactions.push({ type: "Expense", amount: value, reason: reason });

    localStorage.setItem("balance", balance);
    localStorage.setItem("expense", expense);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    alert(`Expense of ₹${value} added for reason: ${reason}`);
    window.location.reload();
  } else {
    alert("Please enter valid amount and reason.");
  }
}

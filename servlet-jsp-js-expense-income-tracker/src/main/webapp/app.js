// app.js

let balance = 0;
let transactions = [];

// Balance आणि transaction list update करणारी function
function updateUI() {
  document.getElementById("balance").innerText = `₹${balance.toFixed(2)}`;
  const list = document.getElementById("transactionList");
  list.innerHTML = "";
  transactions.slice().reverse().forEach(tx => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${tx.type}</strong>: ₹${tx.amount.toFixed(2)}`;
    list.appendChild(li);
  });
}

// Income add करण्यासाठी function
function addIncome() {
  const amountStr = prompt("Enter income amount:");
  const amount = parseFloat(amountStr);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    transactions.push({ type: "Income", amount });
    updateUI();
  } else {
    alert("Please enter a valid positive number.");
  }
}


function addExpense() {
  const amountStr = prompt("Enter expense amount:");
  const amount = parseFloat(amountStr);
  if (!isNaN(amount) && amount > 0) {
    if(amount > balance){
      alert("Expense cannot be more than current balance!");
      return;
    }
    balance -= amount;
    transactions.push({ type: "Expense", amount });
    updateUI();
  } else {
    alert("Please enter a valid positive number.");
  }
}


window.onload = () => {
  updateUI();


  const incomeBtn = document.getElementById("addIncomeBtn");
  const expenseBtn = document.getElementById("addExpenseBtn");

  if (incomeBtn) incomeBtn.addEventListener("click", addIncome);
  if (expenseBtn) expenseBtn.addEventListener("click", addExpense);
};

let balance = 0;
let transactions = [];

function updateBalance() {
  document.getElementById("balance").innerText = `₹${balance}`;
  const list = document.getElementById("transactionList");
  list.innerHTML = "";
  transactions.slice(-5).reverse().forEach(tx => {
    const li = document.createElement("li");
    li.innerText = `${tx.type} (₹${tx.amount}) - ${tx.reason}`;
    list.appendChild(li);
  });
}

function showIncomeForm() {
  const form = `
    <div class="form-popup">
      <h3>Add Income</h3>
      <input type="number" id="incomeAmount" placeholder="Amount" />
      <input type="text" id="incomeReason" placeholder="Reason" />
      <button onclick="addIncome()">Add</button>
    </div>
  `;
  document.getElementById("form-container").innerHTML = form;
}

function showExpenseForm() {
  const form = `
    <div class="form-popup">
      <h3>Add Expense</h3>
      <input type="number" id="expenseAmount" placeholder="Amount" />
      <input type="text" id="expenseReason" placeholder="Reason" />
      <button onclick="addExpense()">Add</button>
    </div>
  `;
  document.getElementById("form-container").innerHTML = form;
}

function addIncome() {
  const amount = parseFloat(document.getElementById("incomeAmount").value);
  const reason = document.getElementById("incomeReason").value;
  if (!isNaN(amount) && amount > 0 && reason) {
    balance += amount;
    transactions.push({ type: "Income", amount, reason });
    document.getElementById("form-container").innerHTML = "";
    updateBalance();
  }
}

function addExpense() {
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const reason = document.getElementById("expenseReason").value;
  if (!isNaN(amount) && amount > 0 && reason) {
    balance -= amount;
    transactions.push({ type: "Expense", amount, reason });
    document.getElementById("form-container").innerHTML = "";
    updateBalance();
  }
}

updateBalance();

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("transactionList");
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  if (transactions.length === 0) {
    list.innerHTML = "<li>No transactions yet.</li>";
    return;
  }

  transactions.slice().reverse().forEach(tx => {
    const li = document.createElement("li");
    li.innerText = `${tx.date} - ${tx.type}: ₹${tx.amount} (${tx.reason})`;
    list.appendChild(li);
  });
});


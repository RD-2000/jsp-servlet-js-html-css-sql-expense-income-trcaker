
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const table = document.getElementById("transactionTable");

transactions.slice().reverse().forEach(tx => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${tx.type}</td>
    <td>₹${tx.amount}</td>
    <td>${tx.reason || "—"}</td>
    <td>${tx.date || "—"}</td>
  `;
  table.appendChild(row);
});

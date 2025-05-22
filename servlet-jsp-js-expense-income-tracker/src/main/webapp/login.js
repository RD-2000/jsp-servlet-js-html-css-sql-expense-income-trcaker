
function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "wallet.html";
  } else {
    alert("Invalid credentials");
  }
}

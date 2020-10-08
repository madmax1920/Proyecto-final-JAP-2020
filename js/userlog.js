const user_account = document.getElementById("info-user");

if (localStorage.getItem("user") === null) {
  location.href = "inicio.html";

} else {
  user_account.innerHTML += `Bienvenido/a: ${localStorage.getItem("user")}`

}
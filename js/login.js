
const username = document.getElementById("user");
const password = document.getElementById("pass");

addEventListener("submit", function (event) {
  event.preventDefault();

  let users = {
    user: username.value,
    pass: password.value,
  };

  localStorage.setItem("user", users.user);
  localStorage.setItem("pass", users.pass);
  location.href = "cover.html";
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {});

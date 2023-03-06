function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "sudario@gmail.com" && password == "reyrey123") {
    window.location.assign("https://youtu.be/zecnwqXe850");
    alert("Login Successfully");
  } else {
    alert("Invalid Information");
    return;
  }
}

const name = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (email.value === "" || email.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be at least 6 characters long.");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

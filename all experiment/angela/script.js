function auth() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "Angela Bartolome" && password == "Angela123") {
    window.location.assign("https://www.youtube.com/");
    alert("Login Successfully");
  } else {
    alert("Invalid Information");
    return;
  }
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (username.value === "" || username.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password be longer than 6 characters! :");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

let login = prompt("Enter username");
let message =
  login === null
    ? ""
    : login.toLowerCase() == "employee"
    ? "Hello"
    : login.toLowerCase() == "director"
    ? "Greetings"
    : login.trim() == ""
    ? "No login"
    : "";
alert(message);

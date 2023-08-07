let userName;
let password;
userName = prompt("Enter username");
if (userName == "" || userName == null) alert("Username is required");
else {
  password = prompt("Enter password");
  if (password == "" || password == null) alert("Password is required");
  if (
    (userName == "admin" && password == "1234") ||
    (userName.toLowerCase() == "john" && password == "qwerty")
  )
    alert(`Hello ${userName}`);
  else alert("Invalid username or password");
}

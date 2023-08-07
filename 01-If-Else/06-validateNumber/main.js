let num1 = +prompt("Enter number");
if (String(num1) !== "NaN") {
  let num2 = +prompt("Enter more number");
  if (String(num2) !== "NaN") {
    alert(`${num1 + num2}`);
  } else alert("Invalid number");
} else alert("Invalid number");

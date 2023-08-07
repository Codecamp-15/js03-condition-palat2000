let point = +prompt("Enter your point");
if (point >= 0 && point <= 100) {
  if (point >= 80) alert("A");
  else if (point >= 70) alert("B");
  else if (point >= 60) alert("C");
  else if (point >= 50) alert("D");
  else alert("F");
} else alert("Not in range");

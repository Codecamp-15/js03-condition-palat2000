let num = prompt("Enter number");
if (num===null||isNaN(num)||num.trim()==="") alert("Invalid number");
else if (+num>0) alert("Positive number");
else if (+num<0) alert("Negative number");
else alert("Zero");


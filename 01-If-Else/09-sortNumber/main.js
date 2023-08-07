let number = prompt("Enter 3 number");
let sortNumber = number.split(" ").sort((a,b) => b-a );
alert(sortNumber);
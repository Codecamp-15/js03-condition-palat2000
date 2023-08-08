let point = prompt("Enter your point");
let grade =
  +point >= 80 && +point <= 100
    ? "A"
    : +point >= 70 && +point < 80
    ? "B"
    : +point > 60 && +point < 70
    ? "C"
    : +point > 50 && +point < 50
    ? "D"
    : +point < 50 && +point >= 0
    ? "F"
    : "not in range";
alert(grade);

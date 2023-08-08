// let number = prompt("Enter 3 number");
// let sortNumber = number.split(" ").sort((a,b) => b-a );
// alert(sortNumber);

//##################################################

let num1 = +prompt("Enter number");
let num2 = +prompt("Enter number");
let num3 = +prompt("Enter number");
let sortNum = "";
if (num1 >= num2) {
  if (num1 >= num3) {
    sortNum += num1 + ", ";
    sortNum += Math.max(num2, num3) + ", ";
    sortNum += Math.min(num2, num3);
  } else {
    sortNum += num3 + ", ";
    sortNum += Math.max(num1, num2) + ", ";
    sortNum += Math.min(num1, num2);
  }
} else if (num1 >= num3) {
  sortNum += `${num2}, ${num1}, ${num3}`;
} else if (num3 >= num1) {
  if (num3 >= num2) {
    sortNum += num3 + ", ";
    sortNum += Math.max(num1, num2) + ", ";
    sortNum += Math.min(num1, num2);
  } else {
    sortNum += num2 + ", ";
    sortNum += Math.max(num1, num3) + ", ";
    sortNum += Math.min(num1, num3);
  }
}
alert(sortNum);

//#####################################
// let num1 = +prompt("Enter number");
// let num2 = +prompt("Enter number");
// let num3 = +prompt("Enter number");
// let max;
// let mid;
// let min;
// if(num1>=num2 && num1>=num3){
//     max = num1;
//     if(num2>=num3){
//         mid = num2;
//         min = num3;
//     }else {
//         mid = num3;
//         min = num2;
//     }
// }else if(num2>=num1 && num2>=num3){
//     max = num2;
//     if(num1>=num3){
//         mid = num1;
//         min = num3;
//     }else{
//         mid = num3;
//         min = num1;
//     }
// }else if(num3>=num1 && num3>=num2){
//     max = num3;
//     if(num1>=num2){
//         mid = num1;
//         min = num2;
//     }else{
//         mid = num2;
//         mind = num1;
//     }
// }
// alert(`${max} : ${mid} : ${min}`);
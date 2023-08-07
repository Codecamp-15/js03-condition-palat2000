let num = prompt("Enter number");
if (isNaN(num)||num===null||num.trim()===""){
    alert("Invalid number");
}
else if (+num===0){
    alert("Zero");
}
else if (+num%2===0){
    alert("Even number");
}
else if (+num%2!==0) {
    alert("Odd number");
}
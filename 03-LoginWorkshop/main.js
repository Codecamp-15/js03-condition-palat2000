let user = prompt("Enter username") || "Guest";
if(user === 'codecamp') {
    let password = prompt("Enter password");
    if (password === '123456'){
        alert(`Welcome ${user}`);
    }else {
        alert("Wrong password");
    }
}else {
    user = "Guest";
    alert(`Welcome ${user}`);
}

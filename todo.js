let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate(){
    console.log('--->', email.value, pwd.value);
    if(email.value === "admin" && pwd.value === "12345"){
        setTimeout(redirectToMain,0);
    } else{
        alert("Enter correct details");
    }
    return false;
}
function redirectToMain() {
     window.location.href = "main.html";
}
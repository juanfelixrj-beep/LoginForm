const toogleBTN = document.querySelector("#password-toogle");
const passwordInput = document.querySelector("#password-input");
const toogleConfirmBTN = document.querySelector("#password-confirm-toogle");
const passwordConfirmInput = document.querySelector("#password-confirm-input");
const form = document.querySelector("#form")

const submitBTN = document.querySelector("#submit");

toogleBTN.addEventListener("click", () =>{
    if(passwordInput.type == "password"){
        passwordInput.type = "text";
        toogleBTN.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    }else{
        passwordInput.type = "password";
        toogleBTN.innerHTML = '<i class="bi bi-eye-fill"></i>';
    }
});

toogleConfirmBTN.addEventListener("click", () =>{
    if(passwordConfirmInput.type == "password"){
        passwordConfirmInput.type = "text";
        toogleConfirmBTN.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    }else{
        passwordConfirmInput.type = "password";
        toogleConfirmBTN.innerHTML = '<i class="bi bi-eye-fill"></i>';
    }
});

form.addEventListener("submit", e =>{
    if(passwordInput.value !== passwordConfirmInput.value){
        alert("Passwords do not match!");
    }else{
        alert("Registered successfully!");
    }
});

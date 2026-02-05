import { User } from "../class/user.js"

const email_input = document.querySelector("#email-input")
const password = document.querySelector("#password") 

const form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = email_input.value
    const password_ = password.value

    let foundUser

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i)

        if(key && key.startsWith("user_")){
            const raw = localStorage.getItem(key)
            if(!raw) continue;

            const user = JSON.parse(raw)
            
            if(user.email == email && user.password == password_){
                foundUser = user
                break
            }

        }
    }
    if(foundUser){
        alert("Login has been succefully")
        window.location.replace("../home/home.html?id="+encodeURIComponent(foundUser.id))
    }else{
        alert("Wrong email or password")
    }

})

import { User } from "../class/user.js"

const params = new URLSearchParams(window.location.search)
const id = params.get("id");
const title = document.querySelector("#title")
let user

function renderUser(){
    const raw = localStorage.getItem("user_"+id)
    if(raw){
        user = JSON.parse(raw)
        title.textContent = user.name

    }else{
        console.error("Cannot get user")
    }  


}
renderUser()
import './protektor.js'
import { login } from "./request.js";
import { elLogin } from "./html-elaments.js";
import validator from "./validator.js";
import toast from "./toast.js";

elLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(elLogin)
    const validatr = validator(formData)
    if(!validatr) return;
    login(validatr).then(res => {
        localStorage.setItem('user', JSON.stringify(res))
        window.location.replace('/src/index.html')
    }).catch(err => {
        console.error('Xatolik yuz berdi:', err.message);
        toast('error', `${err.message}`)
    })
    elLogin.reset()
})

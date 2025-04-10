const registerForm = document.getElementById("registerForm"),
    registerERR = document.getElementById("registerERR")

let userData = [];

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(registerForm)

    const obj = {};
    
    formData.forEach((value, key) => {
        obj[key] = value
    })

    userData.push(obj)
    const json = JSON.stringify(userData)

    if(obj.username && obj.password) {
        localStorage.setItem('user', json)
        window.location.href = 'http://127.0.0.1:5500/src/login.html'
    } else {
        registerERR.textContent = "Iltimos Bosh joylarni to'ldiring!"
    }

    registerForm.reset()
})
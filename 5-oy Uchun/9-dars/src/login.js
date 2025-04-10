const loginForm = document.getElementById("loginForm"),
    error = document.getElementById("error")


loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(loginForm)

    const obj = {};
    formData.forEach((value, key) => {
        obj[key] = value
    })
    const userData = JSON.parse(localStorage.getItem('user'))
    
    if(!userData) {
        error.innerHTML = 'Username yoki password topilmadi'
        setTimeout(() => {
            error.textContent = ''
        }, 2000)
    }
   else {
       userData.forEach(user => {
           if(user.username === obj.username && user.password === obj.password) {
               window.location.href = 'http://127.0.0.1:5500/src/main.html'
           } else {
               error.textContent = 'Username yoki password topilmadi'
               setTimeout(() => {
                   error.textContent = ''
               }, 2000)
           }
       })
   }

    loginForm.reset()
})
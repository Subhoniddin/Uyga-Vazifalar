let dark = localStorage.getItem("dark") || "";

const btn = document.getElementById("btn"),
    light = document.getElementById("light")

if(dark) {
    document.body.classList.add("dark")
    btn.style.display = "none"
     light.style.display = "flex"
}
btn.addEventListener("click", (e) => {
    document.body.classList.add("dark")
    localStorage.setItem("dark", 'dark')
    btn.style.display = "none"
    light.style.display = "flex"
})

light.addEventListener("click", ()=> {
    document.body.classList.remove("dark")
    light.style.display = "none"
    localStorage.removeItem(dark)
    btn.style.display = "flex"
})
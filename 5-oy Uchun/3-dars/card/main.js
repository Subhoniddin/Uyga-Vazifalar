const btns = document.querySelectorAll(".shaharNomi"),
    tabContents = document.querySelectorAll(".tab_content")

function hide() {
    tabContents.forEach(item => item.classList.add("hidden"))
    btns.forEach(btn => btn.classList.remove("active"))
}

function show(index = 0) {
    tabContents.forEach(item => item.classList.remove("show"))
    btns[index].classList.add("active")
    tabContents[index].classList.add("show")
}
hide()
show()

btns.forEach( (btn, index) => {
    btn.addEventListener("click", () => {
        hide()
        show(index)
    })
})
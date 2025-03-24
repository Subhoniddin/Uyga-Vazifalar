const img = document.querySelector("#img"),
    blue = document.querySelector(".blue"),
    yellow = document.querySelector(".yellow"),
    orange = document.querySelector(".orange"),
    dark = document.querySelector(".dark"),
    colors = document.querySelectorAll(".color"),
    fanarOf = document.querySelector("#fanarOf")

document.addEventListener("mousemove", (e) => {
    const {x, y} = e
    img.style.cssText = `
      top: ${y}px;
      left: ${x}px;
    `
})

colors.forEach( (color, index) => {
    color.addEventListener("click", () => {
        document.body.style.cssText = `
           background-color: ${color.innerHTML};
           color: white; 
        ` 
        img.classList.add("show")    
    })
})

fanarOf.addEventListener("click", () => {
    img.classList.remove("show")
    document.body.style.cssText = `
    background-color: white;
    color: black; 
    ` 
})

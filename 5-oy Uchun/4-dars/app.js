document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".image"),
    parent = document.getElementById("parent"),
    left = document.getElementById("left"),
    right = document.getElementById("right"),
    wrapper = document.getElementById("wrapper")

    let local = 568;

    left.addEventListener("click", () => {
        if(local) {
            
            imgs.forEach( img => {
                img.style.transform = `translateX(-${local}px)`
            }) 
            local == 568 ? local : local -= 568
        } else {
            imgs.forEach( img => {
                img.style.transform = `translateX(0px)`
            }) 
            local = 568
        }
    })

    right.addEventListener("click", () => {
        if(local <= 1136) {
            console.log(local);
            imgs.forEach( img => {
                img.style.transform = `translateX(-${local}px)`
            }) 
            local += 568
        } else {
            imgs.forEach( img => {
                img.style.transform = `translateX(0px)`
            }) 
            local = 568
        }
    })
})
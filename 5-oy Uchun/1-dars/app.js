document.addEventListener("DOMContentLoaded", () => {
    const lamp = document.querySelector(".lamp i"),
        btn = document.querySelector(".lamp button"),
        turnoff = document.querySelector(".turnoff")
    btn.addEventListener("click", () => {
        lamp.style.color = "rgb(255, 213, 74)";
    });
    
    turnoff.addEventListener("click", ()=> {
        lamp.style.color = "white";
    })


})
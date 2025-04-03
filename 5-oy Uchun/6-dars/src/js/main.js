import { imags, rulesBtn, modal, closeModalBtn, playAgainBtn, robotImg, resTitle } from "./modules/htmlElaments.js";
import swapping from "./modules/swap.js";
import roboChoose from "./modules/roboChoose.js";
import checking from "./modules/checking.js";

imags.forEach(element => {
    element.addEventListener("click", (e) => {
        let user = e.target.alt
        swapping(true, user)
        let robot = roboChoose()
        robotImg.src = './src/images/load.png'
        robotImg.classList.add('scale')
        resTitle.innerHTML = "..."
        setTimeout(() => {checking(user, robot)}, 1200)
    })
});

rulesBtn.addEventListener("click", () => {
    modal.classList.remove("hidden")
})

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden")
})

// qachon modal ochiq bo'lsa Esc klavish bosilsa modal berkiladi.
document.addEventListener("keydown", (e) => {
    if(e.key == 'Escape' || !modal.classList.contains("hidden")) {
        modal.classList.add("hidden")
    }
})

playAgainBtn.addEventListener("click", (e) => {
    swapping(false, e.target.alt)
})
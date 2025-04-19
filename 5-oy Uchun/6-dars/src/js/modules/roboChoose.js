import { robotImg } from "./htmlElaments.js "

let arr = ['paper', 'rock', 'scissors'];

function roboChoose() {
    let renIndex = Math.trunc(Math.random() * arr.length)
   setTimeout(() => {
       robotImg.classList.remove("scale")
       robotImg.src = `./src/images/${arr[renIndex]}.svg`
    }, 1200)
    return arr[renIndex]
}

export default roboChoose
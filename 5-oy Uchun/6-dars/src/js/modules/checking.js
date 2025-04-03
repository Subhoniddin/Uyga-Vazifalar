import { resTitle, score } from "./htmlElaments.js";

function checking(user, robot) {
    if(user === robot) {
        resTitle.innerHTML = "Tried"
    } else if(user === 'rock' && robot === 'paper') {
        resTitle.innerHTML = "You Lose"
        score.innerHTML = +score.innerHTML > 0 ? +score.innerHTML-1 : score.innerHTML;
    } else if(user === 'rock' && robot === 'scissors') {
        resTitle.innerHTML = "You win"
        score.innerHTML++
    } else if(user === 'paper' && robot === 'scissors') {
        resTitle.innerHTML = "You Lose"
        score.innerHTML = +score.innerHTML > 0 ? +score.innerHTML-1 : score.innerHTML;
    } else if(user === 'paper' && robot === 'rock') {
        resTitle.innerHTML = "You win"
        score.innerHTML++ 
    } else if(user === 'scissors' && robot === 'rock') {
        resTitle.innerHTML = "You Lose" 
        score.innerHTML = +score.innerHTML > 0 ? +score.innerHTML-1 : score.innerHTML;
    } else if(user === 'scissors' && robot === 'paper') {
        resTitle.innerHTML = "You win" 
        score.innerHTML++
    } 
}

export default checking
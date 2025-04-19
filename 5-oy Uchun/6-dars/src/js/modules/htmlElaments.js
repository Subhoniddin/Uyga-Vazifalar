const rulesBtn = document.getElementById("rulesBtn"),
    selectingPage = document.querySelector("#imags"),
    imags = document.querySelectorAll("#imags img"),
    playingZone = document.getElementById("playingZone"),
    userImg = playingZone.querySelector(".userImg > img"),
    resTitle = playingZone.querySelector(".settings > h1"),
    playAgainBtn = playingZone.querySelector(".settings > div"),
    robotImg = playingZone.querySelector(".robot > img"),
    score = document.querySelector("#navbar > div > span"),
    modal = document.getElementById("modal"),
    closeModalBtn = modal.querySelector("#modal p")
    
export {rulesBtn, selectingPage, imags, playingZone, userImg, resTitle, playAgainBtn, robotImg, score, modal, closeModalBtn}
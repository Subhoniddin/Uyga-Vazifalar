import { selectingPage, playingZone, userImg } from "./htmlElaments.js";

function swapping(boolean, alt) {
    
   if(boolean) {
        selectingPage.classList.add("hidden")
        playingZone.classList.remove("hidden")
        userImg.src = `./src/images/${alt}.svg`
   } else {
        selectingPage.classList.remove("hidden")
        playingZone.classList.add("hidden")
   }
   
};

export default swapping

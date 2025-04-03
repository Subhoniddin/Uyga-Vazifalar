const stadion = document.querySelector(".stadion"),
    koptok = document.querySelector(".top"),
    audio = document.querySelector("#audio"),
    err = document.querySelector(".err");
    
stadion.addEventListener("copy", (e) => {e.preventDefault()})
let rotation = 0;
let oldX = null;
let oldY = null;

stadion.addEventListener("click", (e) => {
    const stadionRect = stadion.getBoundingClientRect();
    console.log(stadionRect);
    
    const x = e.clientX - stadionRect.left;
    const y = e.clientY - stadionRect.top;

    if (oldX === null || oldY === null || Math.abs(oldX - x) > 300 || Math.abs(oldY - y) > 300) {
        audio.play();
        if (!koptok.style.top) {
            koptok.style.top = "50%";
            koptok.style.left = "50%";
        }
        rotation += 660;

        koptok.style.top = `${y}px`;
        koptok.style.left = `${x}px`;
        koptok.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

        oldX = x;
        oldY = y;
    } else {
        err.innerHTML = "Yaqin masofa";
        setTimeout(() => {
            err.innerHTML = "";
        }, 1000);
    }
});

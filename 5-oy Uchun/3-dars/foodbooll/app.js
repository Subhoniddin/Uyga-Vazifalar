
const stadion = document.querySelector(".stadion"),
    koptok = document.querySelector(".top"),
    audio = document.querySelector("#audio")

let rotation = 0; 

stadion.addEventListener("click", (e) => {
    const { x, y } = e;
    audio.play()
    if (!koptok.style.top) {
        koptok.style.top = "50%";
        koptok.style.left = "50%";
    }

    rotation += 660; 

    koptok.style.top = `${y}px`;
    koptok.style.left = `${x}px`;
    koptok.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`; 
});


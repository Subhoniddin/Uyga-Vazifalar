document.addEventListener("DOMContentLoaded", () => {

    const card = document.createElement('div'),
        imgDiv = document.createElement('div'),
        img = document.createElement('img'),
        h2 = document.createElement('h2'),
        h6 = document.createElement('h6'),
        p = document.createElement('p'),
        List = document.createElement('div')
        
    
    const items = ["github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

    card.style.cssText = `
        display: inline-block;
        width: 350px;
        border-radius: 12px;
        padding: 40px;
        background: rgba(31, 31, 31, 1);
    `
    imgDiv.style.cssText = `
        display: flex;
        justify-content: center;
    `
    img.style.cssText = `
        width: 88px;
        height: 88px;
        border-radius: 999px;
    `
    img.src = 'https://picsum.photos/200'
    h2.style.cssText = `
         margin-top: 24px;
        font-weight: 600;
        font-size: 24px;
        text-align: center;
        color: rgb(255, 255, 255);
    `
    h2.innerHTML = "Jessica Randall"
    h6.style.cssText = `
        margin: 2px 0;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        color:rgb(196, 248, 42);
    `
    h6.innerHTML = "London, United Kingdom"
    p.style.cssText = `
        margin: 24px 0;
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0%;
        text-align: center;
        color:rgb(255, 255, 255);
    `
    p.innerHTML = "Front-end developer and avid reader."
    List.style.cssText = `
        display: flex;
        flex-direction: column;
        width: 304;
        height: 289;
        gap: 16px;
        text-align: center;
    `
    
    items.forEach( (matn, index) => {
        const Item = document.createElement('div');
        Item.style.cssText = `
        ${index == 0 ? ` background: rgba(196, 248, 42, 1) !important;
            color: black !important;` : ''}
        width: 304;
        height: 45;
        border-radius: 8px;
        padding: 12px;
        gap: 8px;
        color: white;
        background: rgba(51, 51, 51, 1);
        `
        Item.innerHTML = matn;
        List.append(Item);
    });

    imgDiv.append(img)
    card.append(imgDiv, h2, h6, p, List)
    document.body.append(card)

});
import { skleton, wrapper } from "./html-elaments.js";

function formatToUSD(value) {
    const num = Number(value);
    if (isNaN(num)) return 'Invalid number';
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(num);
  }

  function createCard(item) {
    let card = document.createElement('div');
    card.className = 'bg-gray-900 p-5 text-white rounded-lg'
    
    let imgContainer = document.createElement('div')
    imgContainer.className = 'max-w-[350px] max-h-[250px] overflow-hidden flex justify-center hidden'

    let img = document.createElement('img')
    img.classList.add('rounded-lg')
    img.src = 'https://picsum.photos/350/300'

    let title = document.createElement('div')
    title.className = 'text-2xl font-bold tracking-wider pt-3'
    title.textContent = `${item.name}`

    let descr = document.createElement('div')
    descr.className = 'text-gray-300 py-3'
    descr.textContent = `${item.description}`

    let info = document.createElement('div')
    info.className = 'flex justify-between items-center'

    let price = document.createElement('div')
    price.className = 'text-2xl text-gray-300' 
    price.textContent = `${formatToUSD(item.price)}`

    let del = document.createElement('div')
    del.className = 'bg-red-500 px-4 py-2 cursor-pointer rounded-lg hover:bg-red-700 opacity-75'
    del.textContent = 'delete'
    del.dataset.name = 'delete'
    del.dataset.id = `${item.id}`

    imgContainer.append(img)
    info.append(price, del)

    card.append(imgContainer, title, descr, info)
    return card;
  }

function render(data) {
  wrapper.innerHTML = null;
  
    if(!data)  {console.log("bo'sh data"); return }
    const fragment = document.createDocumentFragment();
    data.forEach(item => {
        fragment.append(createCard(item))
    })
    wrapper.append(fragment)
    wrapper.className = 'grid grid-cols-3 gap-5'
    skleton.classList.add('hidden')
}

function localAddCar(car) {
  createCard(car)
}

export {localAddCar};

export default render
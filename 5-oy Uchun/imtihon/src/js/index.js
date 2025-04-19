import './protektor.js'
import { getData, deleteCar } from "./request.js";
import render from "./render.js";
import toast from './toast.js'
import { loading, addBtn } from "./html-elaments.js";

  
const data = getData();
data.then(({data}) => {
    render(data)
})

wrapper.addEventListener('click', ({target}) => {
  if(target.dataset.name === 'delete') {
    loading.classList.remove('hidden')
    
    deleteCar(target.dataset.id).then(res => {
      toast('success', "Malumot o'chirildi!")
      target.parentElement.parentElement.remove()
    }).catch(err => {
      console.log(err);
      toast('error', `${err.message}`)
      
    }).finally(() => {
      loading.classList.add('hidden')
    })
  }
})

addBtn.addEventListener('click', () => {
  window.location.replace('/pages/create.html')
})
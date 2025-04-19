import './protektor.js'

import { addCarform, wrapper } from './html-elaments.js'
import validator from './validator.js'
import { addCar } from './request.js'
import { localAddCar } from './render.js'
import toast from './toast.js'

addCarform.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(addCarform);
    const validatr = validator(formData)
    console.log(validatr);
    
    if(validatr) {
        addCar(validatr).then(res => {
            if(res) {
                localAddCar(validatr)
                toast('success', "Yangi car qo'shildi")
                window.location.replace('/src/index.html')
            }
        })
    } else {
        console.log('addCarForm validatsiya xatolik');
        toast('error', "addCarForm validatsiya xatolik")
    }

    addCarform.reset()
})
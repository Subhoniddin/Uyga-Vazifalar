import './protektor.js'
const wrapper = document.getElementById('wrapper')
const skleton = document.getElementById('skleton')
const addBtn = document.getElementById('addBtn')
const elLogin = document.getElementById('login')
const toasSuccess = document.getElementById('toast-success')
const toasDanger = document.getElementById('toast-danger')
const loading = document.getElementById('loading')
const addCarform = document.getElementById('addCarform')

// toast xabarini ozgartrish uchun
function toastMsg(parent, selektor, msg) {
    let toast = parent.querySelector(selektor);
    toast.textContent = msg
}

export {wrapper, skleton, addBtn, elLogin, toasSuccess, toasDanger, toastMsg, loading, addCarform}
import { toasSuccess, toasDanger, toastMsg } from "./html-elaments.js";

function toast(status, msg) {
    switch (status) {
        case 'success':
            proses(toasSuccess, msg, '.toastSuccess')
            break;
        case 'error':
            proses(toasDanger, msg, '.toastError')
            break;
        default:
            console.log('Toast status topilmadi');
            break;
    }

    function proses(el, msg, selektor) {
        toastMsg(el, selektor, msg);
        el.classList.remove('hidden')
        el.classList.add('animate-toast')
        setTimeout(() => {
            el.classList.add('hidden')
            el.classList.remove('animate-toast')
        }, 2500)
    }
}

export default toast
import { elLogin } from "./html-elaments.js";
import toast from "./toast.js";


function validator(formData) {
    const formObj = {}
    for (let [key, value] of formData.entries()) {
        if(value.trim() === '') {
            elLogin[key].focus()
            toast('error', `${key}ni to'ldiring!`)
            return false
        }
        formObj[key] = value;
    }
    return formObj;
}

export default validator
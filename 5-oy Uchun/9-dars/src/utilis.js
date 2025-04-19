
export function validator(obj) {
    console.log(obj);
    
    if (obj.username.trim() === '') {
        return {
            target: 'username',
            msg: 'foydalanuvchi bosh bolmasin'
        }
    }
    if (obj.password.trim() === '') {
        return {
            target: 'password',
            msg: 'foydalanuvchi paroli bosh bolmasin'
        }
    }
    return false
}
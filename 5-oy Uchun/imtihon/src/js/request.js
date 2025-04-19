// https://json-api.uz/api/project/fn37/cars

async function getData() {
    const res = await fetch('https://json-api.uz/api/project/fn37/cars');
    const data = await res.json();
    return data
};

async function deleteCar(id) {
    let {access_token} = JSON.parse(localStorage.getItem('user'))
    
    const res = await fetch(`https://json-api.uz/api/project/fn37/cars/${id}`, {
       method: 'DELETE',
       headers: {
        Authorization: `Bearer ${access_token}`
    }
    });

    if(!res.ok) {
        const err = await res.text();
        throw new Error(`xatolik:${err}`);
    }
    return id;
}

async function addCar(obj) {
    let {access_token} = JSON.parse(localStorage.getItem('user'))
    
    const res = await fetch('https://json-api.uz/api/project/fn37/cars', {
       method: 'DELETE',
       headers: {
        Authorization: `Bearer ${access_token}`
        },
        body: JSON.stringify(obj)
    });

    if(!res.ok) {
        const err = await res.text();
        throw new Error(`xatolik:${err}`);
    }
    if(res.ok) {
        return true;
    }
    return false;
}

async function login(obj) {
    const res = await fetch('https://json-api.uz/api/project/fn37/auth/login', {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(obj)
    });

    if(!res.ok) {
        const errorText = await res.text(); 
        throw new Error(errorText);
    }
    const data = await res.json();
    return data
}

export {getData, deleteCar, login, addCar}



 window.addEventListener("load", () => {
    const pathname = window.location.pathname
    console.log(pathname);

    const currentPaths = ['/', '/src/index.html', '/pages/create.html' ]
    const user = localStorage.getItem('user');

    if(user && currentPaths.includes(pathname)) {
        localStorage.setItem('lastPath', pathname)
    }

    if(user && !currentPaths.includes(pathname)) {
        let path = localStorage.getItem('lastPath') || '/src/index.html'
        window.location.replace(path)
    }

    if(!user && currentPaths.includes(pathname)) {
        window.location.replace('/pages/login.html')
    }

})


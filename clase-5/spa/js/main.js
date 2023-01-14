const ajax = (method, url) => {
    let xhr = new XMLHttpRequest
    xhr.open(method, url)
    xhr.send()
    return xhr
}

const getNameTemplate = (hash) => {
    return hash ? hash.slice(1).concat('.html') : 'home.html'
}

const markLink = (template) => {

    let id = template.split('.')[0]
    let links = document.querySelectorAll('a')

    links.forEach(link => {
        link.classList.remove('active')
        if(link.id == id){
            link.classList.add('active')
        }
    })
}

const getTemplatesWithHistoryHash = () => {
    
    let links = document.querySelectorAll('a')
    let main = document.querySelector('main')

    let hash = location.hash
    //let template = hash.slice(1).concat('.html')
    let template = getNameTemplate(hash)
    //let homePage = 'home.html'
    let homePage = template
    markLink(homePage)
    let xhr = ajax('get', homePage)

    xhr.addEventListener('load', () => {
        if(xhr.status == 200){
            main.innerHTML = xhr.response
        }
    })

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            let id = link.id
            location.hash = id
        })
    })

    window.addEventListener('hashchange', () => {

        let hash = location.hash
        let template = getNameTemplate(hash)
        //let template = hash.slice(1).concat('.html')

        markLink(template)
        let xhr = ajax('get', template)
        xhr.addEventListener('load', () => {
            if(xhr.status == 200){
                main.innerHTML = xhr.response
            }
        })
    })

}

const getTemplatesWithoutHistory = () => {

    let links = document.querySelectorAll('a')
    let main = document.querySelector('main')

    let homePage = 'home.html'
    let xhr = ajax('get', homePage)

    xhr.addEventListener('load', () => {
        if(xhr.status == 200){
            main.innerHTML = xhr.response
        }
    })

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            let id = link.id
            let template = id.concat('.html')
            let xhr = ajax('get', template)
            xhr.addEventListener('load', () => {
                if(xhr.status == 200){
                    main.innerHTML = xhr.response
                }
            })
        })
    })
}

// Load navbar through ajax
let navbar = document.querySelector('nav')
let xhr = ajax('get', 'navbar.html')

xhr.addEventListener('load', () => {

    if(xhr.status == 200){
        navbar.innerHTML = xhr.response
        //getTemplatesWithoutHistory()
        getTemplatesWithHistoryHash()
    }

})


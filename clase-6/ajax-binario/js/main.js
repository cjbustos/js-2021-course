console.log('Binary Ajax');

// blob - es un obj que contiene la data más el método para decodificar las imágenes

let xhr
const loadImage = (fileName) => {
    let img = document.querySelector('img')
    let progressBar = document.querySelector('progress')
    let percentageShow = document.querySelector('span')

    img.src = ''
    progressBar.value = 0
    percentageShow.innerText = 0 + '%'

    xhr = new XMLHttpRequest
    let urlWithoutCache = `img/${fileName}?=${Date.now()}`
    //xhr.open('GET', `img/${fileName}`)
    xhr.open('GET', urlWithoutCache)
    xhr.responseType = 'blob'
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            let imageBlobType = xhr.response
            // la url represente el lugar de la memoria interna en donde está alojada la imagen, podemos referenciar el buffer a través de una url 
            // blob es un espacio temporal de memoria en el navegador que se puede referenciar a través de la url
            let url = URL.createObjectURL(imageBlobType)
            img.src = url
        }
    })

    xhr.addEventListener('progress', e => {
        console.log('Downloading...');
        if(e.lengthComputable){
            let percentage = parseInt((e.loaded * 100) / e.total)
            progressBar.value = percentage
            percentageShow.innerText = percentage
        }
    })

    xhr.send()
}

let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    //first element of form, first object of property files and key name
    let nameOfFile = form[0].files[0].name
    loadImage(nameOfFile)
})

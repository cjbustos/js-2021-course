console.log('External Ajax');

//let urlCors = 'https://jsonplaceholder.typicode.com/posts'
let urlNotCors = 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json'

const myCallback = (response) => {
    console.log(response.query);
}

let xhr = new XMLHttpRequest
xhr.open('GET', urlNotCors)
xhr.addEventListener('load', () => {
    if (xhr.status == 200) {
        let response = JSON.parse(xhr.response)
        console.log(response);
    }
})

// JSONP Implementation from Javascript
xhr.addEventListener('error', () => {
    console.error('Ajax error!');

    let script = document.createElement('script')
    script.src = urlNotCors.concat('&callback=myCallback')
    // trigger get method
    document.body.appendChild(script)

})

// send request
xhr.send()


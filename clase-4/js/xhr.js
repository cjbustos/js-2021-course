// Note: keyword "new" -> create the object from function
// Async instance of communication
let xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
    console.log(`readystatechange event -> ${xhr.readyState}`);

    if(xhr.readyState == 2){
        //let headers = xhr.getAllResponseHeaders()
        let type = xhr.getResponseHeader('content-type')

        if(!type.includes('text/plain')){
            console.log('Incorrect format!');
            xhr.abort()
        }
    }

    /* if(xhr.readyState == 4){
        if(xhr.status == 200){
            console.log(xhr.response);
        }
        else {
            console.error(`Error on communication status: ${xhr.status}`)
        }
    } */
})

// This event should use
xhr.addEventListener('load', () => {
    console.log('Load event');
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            console.log(xhr.response);
        }
        else {
            console.error(`Error on communication, status: ${xhr.status}`)
        }
    }
})

xhr.addEventListener('abort', () => {
    console.log('Communication aborted!');
})

xhr.addEventListener('timeout', () => {
    console.log('Time exceed!');
})

// Configure resource
xhr.open('get', 'server.log')

// If you set 0 doesn't have timeout
xhr.timeout = 1000

// Get resource
xhr.send()







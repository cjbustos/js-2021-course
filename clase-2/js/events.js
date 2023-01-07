console.log('Events and Callback');
console.log('\n/* CALLBACKS */');

/* const one = () => {
    console.log('Function 1')
  }
  
  const two = () => {
    console.log('Function 2')
  }
  
  function test(item, callback){
    console.log(item)
    callback ? callback() : console.log('callback undefined!');
  }
  
  test(1, one)
  test(2, two)
  test(3, one)

  const add = (a, b) => a + b

function calculate(a, b, cb){
  cb ? console.log(cb(a, b)) : console.log('cb undefined!')
}

calculate(2, 4, add)
calculate(4, 2, (a, b)=> a % b) */

const one = () => {
    console.log('Function 1')
  }
  
  const two = () => {
    console.log('Function 2')
  }

var btn = document.getElementById('btn')
//btn.onclick = () => console.log('Click!');;

// Multiple callback execute - Option 1
/* btn.onclick = () => {
    one()
    two()
} */

// Multiple callback execute - Option 2
btn.addEventListener('click', () => console.log('Three functions registered in event click'))
btn.addEventListener('click', one)
btn.addEventListener('click', two)
btn.addEventListener('click', function(e){
    console.log(e);
})

var oneDiv = document.getElementById('one')
var twoDiv = document.getElementById('two')
var threeDiv = document.getElementById('three')

threeDiv.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('three');
}, false)

twoDiv.addEventListener('click', () => {
  console.log('two');
}, false)

oneDiv.addEventListener('click', () => {
  console.log('one');
}, false)

/* Btn created - Two solutions */
var buttonCreated = false
var static = document.getElementById('static')

static.addEventListener('click', () => {
  console.log('Static button!');

  // Create dynamic btn
  if(!buttonCreated){
    var dynamic = document.createElement('button')
    dynamic.innerText = 'Dynamic'
    dynamic.id = 'dynamic'
    document.body.appendChild(dynamic)

    // Option 1 - Without event propagation
    /* var dynamic = document.getElementById('dynamic')
    dynamic.addEventListener('click', () => {
    console.log('Dynamic button!');
    }) */

    buttonCreated = true
  }
})

// Option 2 - With event propagation
document.addEventListener('click', (e) => {
  let id = e.target.id
  if(id == 'dynamic'){
    console.log('Dynamic button!');
  }
})

// Custom events
var links = ['http://www.google.com', 'http://www.mercadolibre.com.ar', 'http://www.clarin.com.ar']
var showList = false
// First: create custom event
var eventShowTable = new Event('showTable', {'bubbles':true, 'cancelable':false})

// Second: registry the event created
document.addEventListener('showTable', () => {
  /* var p = document.createElement('p')
  p.innerHTML = '<em>This is a paragraph...</em>'
  document.body.appendChild(p) */
  if(!showList){
    var list = document.createElement('ul')
    for(item of links){
      list.innerHTML += `<li><a href="${item}">${item.substring(7, item.length)}</a></li>`
    }
    document.body.appendChild(list)
    showList = true
  }
})

// Third: Dispatch custom event
document.getElementById('btn-show-table').addEventListener('click', () => document.dispatchEvent(eventShowTable))



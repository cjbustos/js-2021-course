/* Callback example

const add = (a, b) => a + b

function calculate(a, b, cb){
  cb ? console.log(cb(a, b)) : console.log('cb undefined!')
}

calculate(2, 4, add)
calculate(4, 2, (a, b)=> a % b) 
*/

/* Min and Max example */
let arr = []

for(let i = 0; i < 10; i++){
  var r = Math.random()
  r *= 10
  r = parseInt(r)
  r++
  arr.push(r)
  console.log(arr);
}

function getMinAndMaxValue(arr){
  let obj = {}
  min = arr.sort((a, b) => a - b)[0]
  max = arr.sort((a, b) => b - a)[0]
  return {...obj, min, max}
}

console.log(getMinAndMaxValue(arr))

const getMin = arr.reduce((acc, val) => Math.min(acc, val))

function minMax(items) {
    return items.reduce((acc, val) => {
        acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0]
        acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1]
        return acc;
    }, []);
}

minMax(arr)


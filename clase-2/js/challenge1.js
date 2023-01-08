
// Create an Object with a "hello" method that writes "Hello <name>" in the console

const name = 'Charles';
const obj = {
  hello: (name) => console.log('Hello, ' + name)
}

obj.hello(name);

// How would you make the name inmutable?

const obj2 = {
  name: 'Charles',
  hello: () => console.log(`Hello ${obj2.name}`)
}

obj2.hello()

//Object.freeze(obj2)

obj2.name = 'Joseph'

/* Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least */


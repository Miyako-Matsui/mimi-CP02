const colors = require('colors') //node doesn't require . or / before the file name
console.log('hello'.trap.rainbow)

const cowsay = require('cowsay')
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: 'oO',
    T: 'U ',
  })
)

const yosay = require('yosay')
console.log(
  yosay(
    'Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'
      .rainbow
  )
)

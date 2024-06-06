import doSomething, { printMagicNumber } from "./myModule.js"

// not setting the magicNumber value here

console.log("---- script2.js ----")
console.log("(not setting the magic number, this time)")

doSomething()
doSomething()
doSomething()

// getting the old value for magicNumber, and this means that variables that are global to a module,
// are global to the whole project!
printMagicNumber() // still prints 4 !!!

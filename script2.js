import doSomething, { printMagicNumber } from "./myModule.js"

// not setting the magicNumber value here, yet it can be reached thanks the import above !

console.log("---- script2.js ----")
console.log("(not setting the magic number, this time)")

doSomething()
doSomething()
doSomething()

// We are still getting the value that was set for magicNumber in script.js, and this means that variables
// that have module scope stay in memory, between successive calls to functions of the module, even if
// the callse happen from different files, importing the module themselves! This means that they are importing
// **the same instance** of the module, i.e. **the module is cached**!
//
// The same module is still in memory, so importing it here gives access to its cached version
// and to the same value of the variable that was set in script.js !
printMagicNumber() // still prints 4 !!!

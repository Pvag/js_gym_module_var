import doSomething, { setMagicNumber, printMagicNumber } from "./myModule.js"

console.log("---- script1.js ----")

setMagicNumber(4)

// One could expect that these calls would re-initialize the module values (state),
// but, as you can tell, that's not the case:
// the value printed at the end of the script corresponds to the value set in the beginning (i.e. 4),
// because modules are cached!
doSomething()
doSomething()
doSomething()

// This shows that the value of the module-wide variable (magicNumber)
// was not changed, i.e. it was kept during calls to doSomething.
//
// What I am doing here, calling doSomething() multiple times, is trying
// to emulate the situation that happens because of multiple renderings of a React component.
// I couldn't understand how a module-scoped variable was kept during re-renders,
// and this example shows that that's standard JS behaviour, both by the browser and by Node.js:
// the value of a variable that has module scope is kept during successive calls of the module's functions,
// even if the module is imported from a different file, but during the same process.
printMagicNumber()

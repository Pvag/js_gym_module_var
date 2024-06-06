import doSomething, { setMagicNumber, printMagicNumber } from "./myModule.js"

console.log("---- script1.js ----")

setMagicNumber(4)

// One could expect that these calls would re-initialize the global values in the module,
// but, as you can tell, that's not the case:
// the value printed at the end of the script corresponds to the value set in the beginning (i.e. 4).
doSomething()
doSomething()
doSomething()

// This shows that the value of the global variable in the module (magicNumber)
// was not changed, i.e. it was kept during calls to doSomething.
// What I doing here, calling doSomething multiple times, is trying
// to emulate the situation that happens because of multiple renderings of a React component.
// I couldn't understand how a module global variable was kept during re-renders,
// and this example shows that that's standard JS behaviour: the value of a variable that
// is global to a module is kept during successive calls of the module's functions,
// until the module is re-imported somewhere else, where...it maybe will have its own scoped value,
// for the magicNumber variable? WRONG! A variable that is global to a module, is actually global to
// the whole project! Check 'script2.js'!
printMagicNumber()

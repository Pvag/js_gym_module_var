let magicNumber = 0

export default function doSomething() {
  console.log("I am doing something, meanwhile...")
}

export function setMagicNumber(n) {
  magicNumber = n
  console.log(`I have just set the magic number to ${magicNumber}.`)
}

export function printMagicNumber() {
  console.log(`The magic number is still ${magicNumber}.`)
}

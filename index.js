const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var name = 'Ralph'
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  var name = 'Bob'
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

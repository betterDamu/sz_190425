var name = 'damu'
var age = 18
var obj = {
  name,
  age
}
console.log(obj)

setTimeout(() => {
  console.log('---')
}, 3000)

for (var a = 0; a < 5; a++) {
  var a = 6
  console.log('---')
}

function wrap () {
  var a = 1
  console.log(a)
  function inner () {
    var a = 0
    console.log(a)
  }
  inner()
}
wrap()

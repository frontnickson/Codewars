function getRandomNumberArr() {
  const result = []

  for (let i = 0; i < 10; i++) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let randomIndex = Math.floor(Math.random() * alphabet.length)

    let user = {
      id: Math.floor(Math.random() * 1000000),
      rank: alphabet[randomIndex],
    }
    result.push(user)
  }

  return result
}

const f = getRandomNumberArr()
console.log(f)

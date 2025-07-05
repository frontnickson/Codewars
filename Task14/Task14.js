// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

function sumStrings(a, b) {
  let first = a.replace('/^0+/', '').split('')
  let second = b.replace('/^0+/', '').split('')

  let reverseFirst = [...first.reverse().map(Number)]
  let reverseSecond = [...second.reverse().map(Number)]

  if (reverseFirst.length > reverseSecond.length) {
    let count = reverseFirst.length - reverseSecond.length
    let zero = []

    for (let i = 0; i < count; i++) {
      zero.push(0)
    }

    reverseSecond = [...reverseSecond, ...zero]
  }

  if (reverseSecond.length > reverseFirst.length) {
    let count = reverseSecond.length - reverseFirst.length
    let zero = []

    for (let i = 0; i < count; i++) {
      zero.push(0)
    }

    reverseFirst = [...reverseFirst, ...zero]
  }

  let result = []
  let carry = 0

  for (let i = 0; i < reverseFirst.length; i++) {
    let sum = reverseFirst[i] + reverseSecond[i] + carry

    if (sum < 10) {
      result.push(sum)
      carry = 0
    }

    if (sum >= 10) {
      let splitSum = String(sum).split('')
      result.push(Number(splitSum[1]))
      carry = Number(splitSum[0])
    }
  }

  if (carry > 0) {
    result.push(carry)
  }

  return result.reverse().join('').replace(/^0+/, '')
}

const f = sumStrings('00103', '08567')
console.log(f)

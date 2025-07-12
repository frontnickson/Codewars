// https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation.
// Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
  let splitText = String(string).split('')

  if (splitText.length === 1) {
    return String(splitText[0]).toLowerCase()
  }

  let result = []

  for (let i = 0; i < splitText.length; i++) {
    if (
      splitText[i] === splitText[i].toUpperCase() &&
      splitText[i] != Number(splitText[i])
    ) {
      result.push('_')
      result.push(splitText[i].toLowerCase())
    } else {
      result.push(splitText[i])
    }
  }

  return result.slice(1, result.length).map(String).join('')
}

const f = toUnderscore('5')
console.log(f)

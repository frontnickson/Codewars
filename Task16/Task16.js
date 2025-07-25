// https: //www.codewars.com/kata/5426d7a2c2c7784365000783/train/javascript

// Write a function which makes a list of strings representing
// all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()", "(())"]
// balancedParens(3) => ["()()()", "(())()", "()(())", "(()())", "((()))"]

function balancedParens(n) {
  let firstSybmols = []

  for (let i = 0; i < n; i++) {
    let symbol = '()'

    firstSybmols.push(symbol)
  }

  console.log(firstSybmols)
}

balancedParens(3)

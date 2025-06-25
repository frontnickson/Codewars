// What you need to do:
// Make a function that finds the first letter that appears only once.
// Examples to understand:
//
// Word: "stress"
//
// s appears 2 times ❌
// t appears 1 time ✅ (this is the answer!)
// r appears 1 time
// e appears 1 time
// Answer: "t" (because t comes first and appears only once)
//
// Word: "hello"
//
// h appears 1 time ✅ (this is the answer!)
// Answer: "h"
//
// Word: "aabb"
//
// a appears 2 times ❌
// b appears 2 times ❌
// Answer: "" (empty string - no letter appears only once)
//
// Special rules:
//
// Big letters = small letters: "A" and "a" are the same
// But return the original: If you find "T", return "T" (not "t")
//
// Example with big/small letters:
//
// Word: "sTreSS"
// Count: s=2, T=1, r=1, e=1, S=2
// Answer: "T" (because T/t appears only once, and the original letter was "T")
//
// What your function should do:
//
// Look at each letter in the word
// Count how many times each letter appears (A=a, B=b, etc.)
// Find the first letter that appears only 1 time
// Return that letter in its original form
//
// Does this help? Do you want me to show you the code too?

function firstNonRepeatingLetter(s) {

    let splitText = s.split("")

    let deleteDublicate = [];

    for (let i = 0; i < s.length; i++) {
        let filterText = splitText.filter(item => item === splitText[i])
        deleteDublicate.push(filterText)
    }

    return deleteDublicate.filter(item => item.length === 1)[0][0]
}

const f = firstNonRepeatingLetter("eelmgelddd")
console.log(f)
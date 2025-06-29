// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
//
// What is considered Valid?

// A string of braces is considered valid if all braces are matched with the correct brace.

// Exmaple
//
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces) {

    const pairs = {'(': ')', '[': ']', '{': '}'};
    const stack = [];

    for (const symbol of braces) {

        if (pairs[symbol]) {
            stack.push(symbol)
        } else {
            const last = stack.pop();
            if (pairs[last] !== symbol) return false;
        }

    }

    return stack.length === 0;
}

const f = validBraces("()")
console.log(f)

// My improvised solving
// spoiler it's not work

// function validBraces(braces){
//     let splitBraces = braces.split("").map((element) => {
//         if (element === ")") return "("
//         if (element === "}") return "{"
//         if (element === "]") return "["
//         else return element;
//     })
//
//     let cloneSplitBraces = [...splitBraces]
//     cloneSplitBraces.reverse()
//
//     let firstHalfSign = splitBraces.slice(0, splitBraces.length / 2)
//     let secondHalfSign = cloneSplitBraces.slice(0, splitBraces.length / 2)
//
//     let isFlag = true;
//
//     for (let i = 0; i < firstHalfSign.length; i++) {
//
//         if (firstHalfSign[i] === secondHalfSign[i]) {
//             isFlag = true;
//             return true;
//             break;
//         } else {
//             isFlag = false;
//             break
//         }
//
//     }
//
//
//     if (!isFlag) {
//         for (let i = 0; i < splitBraces.length; i += 2) {
//             if (splitBraces[i] === splitBraces[i + 1]) {
//                 return true;
//                 break;
//             } else {
//                 return false;
//                 break;
//             }
//         }
//     }
// }
// Write a method (or function, depending on the language) that converts a string to camelCase,
// that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"


function getStn(str) {

    let splitString = str.split(" ")

    return splitString.map((element) => {
        let splitElement = element.split("")
        return splitElement[0].toUpperCase() + splitElement.slice(1).join("")
    }).join("")
}

const f = getStn("test test case")
console.log(f)
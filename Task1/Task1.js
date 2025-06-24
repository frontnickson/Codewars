// // Welcome.
// //
// // In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// //
// // If anything in the text isn't a letter, ignore it and don't return it.
// //
// // "a" = 1, "b" = 2, etc.
//
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {

    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ];

    let onlyLettersArray = text
        .toLowerCase()
        .replace(/[^a-z]+/gi, '')
        .split('');

    return `'${onlyLettersArray.map((element) => {
        return alphabet.indexOf(element) + 1;
    }).join(' ')}'`

}

const f = alphabetPosition("The sunset sets at twelve o' clock.")
console.log(f)

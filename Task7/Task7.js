// constant difference between the consecutive terms of a given series of numbers.
// You are provided with consecutive elements of an Arithmetic Progression.
// There is however one hitch: exactly one term from the original series is missing
// from the set of numbers which have been given to you. The rest of the given series
// is the same as the original AP. Find the missing term.
//
// You have to write a function that receives a list, list size will always
// be at least 3 numbers. The missing term will never be the first or last one.


function findMissing(list) {

    let correctArr = [];
    let lastValueArr = list.slice(-1)[0]
    let result = []

    for (let i = list[0]; i <= lastValueArr; i += 2) {
        correctArr.push(i)
    }

    let count = 0;

    for (let i = 0; i < list.length; i++) {
        if (correctArr[i] === list[i]) count++;
    }


    return correctArr[count];
}

const f = findMissing([1, 3, 5, 9, 11])
console.log(f)
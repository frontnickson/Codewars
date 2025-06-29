// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let withOutZeroArr = arr.filter((element) => element !== 0)
    let zeroArr = arr.filter((element) => element === 0)
    return withOutZeroArr.concat(zeroArr)
}

moveZeros(['a', 'b', null, 'c', 'd', 1, false, 1, 3, 1, 9, {}, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0])
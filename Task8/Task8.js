// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9


// [[1,2,3],[2,4,6],[3,6,9]]


function multiplicationTable(size) {

    let result = []
    let cycleNumber = 1;
    let lastNumber = size;
    let cycleCount = 1;

    for (let j = 0; j < size; j++) {

        let isArr = []

        for (let i = cycleNumber; i <= lastNumber; i++) {
            if(i % cycleCount === 0) isArr.push(i)
        }

        cycleCount++;
        cycleNumber++;
        lastNumber += size;

        result.push(isArr)
    }

    return result;
}

multiplicationTable(3)

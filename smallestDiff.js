let array1 = [10, 20, 14, 16, 18]
let array2 = [30, 23, 54, 33, 96]

function smallestDifference () {
    let smallestDifference

    for (let i = 0; i < array1.length; i++) {
        for (let k = 0; k < array2.length; k ++) {
            if (array1[i] >= array2[k] && (array1[i] - array2[k] < smallestDifference || smallestDifference === undefined)) {
                smallestDifference = array1[i] - array2[k]
            } else if (array1[i] < array2[k] && (array2[k] - array1[i] < smallestDifference || smallestDifference === undefined)) {
                smallestDifference = array2[k] - array1[i]
            }
        }
    }
    return smallestDifference
}

console.log(smallestDifference())
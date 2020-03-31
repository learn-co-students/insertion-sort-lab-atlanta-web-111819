function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0

    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function insertionSort(array){
    let sortedArray = []
    while (array.length != 0) {
        let min = findMinAndRemove(array)
        sortedArray.push(min)
    }
    return sortedArray
}

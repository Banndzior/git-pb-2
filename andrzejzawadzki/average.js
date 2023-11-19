let array = [1, 2, 3];

function getAverage(array) {
    let sum = 0;

    for(let currentNumber of array) {
        sum = sum + currentNumber;
    }

    let result = sum / array.length;

    return result.toFixed(2);

}

console.log(getAverage(array));

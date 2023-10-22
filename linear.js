let arr = [1, 12, 123, 43, 55];

function linearSearch(arr, target) {
    for (let currentElement of arr) {
        if(currentElement === target) {
            return currentElement;
        }
    }
return "Not found";

}

console.log(linearSearch(arr, 55));


// how many even numbers

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNum(array1) {
    let count = 0;
    for (i = 0; i < array1.length; i++) {
        if (array1[i] % 2 == 0) {
            count++;
            // console.log(array1[i]);
        }
    }
    return count;
}
console.log(evenNum(array1));

// how many odd num

let odd1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function oddNum(odd1) {
    let count = 0;
    for (i = 0; i < odd1.length; i++) {
        if (odd1[i] % 2 != 0) {
            count++;
            // console.log(odd1[i]);
        }
    }
    return count;
}
console.log(oddNum(odd1));

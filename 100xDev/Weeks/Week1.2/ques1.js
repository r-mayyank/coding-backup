//wap that prints largest number in SORTED ASSENDING array

const arr = [5,8,20, 10,12];
let max = arr[0];

for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] > max) {
        max = arr[index];
    }
}
console.log(max);
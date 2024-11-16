// multiply input arr by 2 and return the result
//Example for map function
const input = [1,2,3,4,5];

function transform (i) {
    return i * 2;
}
const ans = input.map(transform);
console.log(ans);

//Example for filter function
//give back all the even values from the input array

function filterLogic(i) {
    if (i % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const ans2 = input.filter(filterLogic);
console.log(ans2);
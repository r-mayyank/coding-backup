// Question-6:    WAP to input n numbers and log the average of those number.

let n = parseInt(prompt("Input how many numbers you want to input: "));
let sum = 0;

for (let i =1; i <= n; i++) {
    let input = parseInt(prompt("Enter number " + i + ": "));
    sum = sum + input;
}
console.log(sum/n);1
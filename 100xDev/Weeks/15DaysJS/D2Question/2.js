// WAP to input radius of a circle and log the area of circle.

let rad = prompt("Enter radius");
let pi = 3.14159265358979323846;
// let pi_value = Math.pi;

function findArea(r) {
    return (pi * r * r);
}

let Area = findArea(rad);
console.log("Area of circle is: " + Area);
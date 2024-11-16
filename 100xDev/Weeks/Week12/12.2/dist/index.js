"use strict";
function sumOfAge(user1, user2) {
    var _a, _b;
    return ((_a = user1.age) !== null && _a !== void 0 ? _a : 0) + ((_b = user2.age) !== null && _b !== void 0 ? _b : 0);
}
const age = sumOfAge({ age: 20 }, { name: "mayank", age: 17 });
console.log(age);

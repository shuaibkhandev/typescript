"use strict";
// const firstName:string = "Shuiab";
// console.log(`Hello my name is: ${firstName}`);
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    else {
        throw new Error("Invalid Arguments");
    }
}
console.log(combine(3, 8));
console.log(combine("Shuaib", "khan"));

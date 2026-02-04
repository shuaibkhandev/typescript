// const firstName:string = "Shuiab";
// console.log(`Hello my name is: ${firstName}`);

// let response: string | number;
// response = 34;

// let value: any = "Pending";
// value = 12;
// console.log(value.toFixed(2));

// let resp: unknown;
// resp = 20;
// console.log(resp.toFixed(2)); wll give err

// function overloading

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  } else {
    throw new Error("Invalid Arguments");
  }
}


console.log(combine(3,8));
console.log(combine("Shuaib","khan"));



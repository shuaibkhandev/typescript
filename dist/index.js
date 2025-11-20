// Variable *************************
// let firstName : string = "Shuaib";
// console.log(firstName);
// let age : number = 24;
// console.log(age);
// let isMale : boolean = true;
// console.log(isMale);
// type inference 
// let email = "skhan.csit@gmail.com";
// email = 123; it value show us error
// console.log(email);
// Union *************************
// let yourAge : string | number;
// yourAge = "12";
// console.log(yourAge);
// unknown && any *************************
// let age : any = true;
// let name : unknown = 'shuaib';
// name = 12;
// if(typeof name === "number"){
//     name.toFixed()
// }
// console.log(name);
// functions *************************
// function addNum(a:number, b:number):number{
//     return a + b;
// }
// console.log(addNum(10,12));
// const greet = (name: string): void => {
//     console.log(`Hello ${name}`);
// }
// greet("Ahmad")
// const greet2 = function(name?: string):void{
//      console.log(`Hello ${name ?? "Guest"}`);
// }
// greet2("Shuaib");
const greet3 = function (name = "Talha") {
    console.log(`Hello ${name}`);
};
greet3();
export {};

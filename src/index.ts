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

// const greet3 = function(name: string = "Talha"):void{
//      console.log(`Hello ${name}`);
// }

// greet3();

// never return function
// function throwError():never{
//      throw new Error("Something went wrong!");

// }

// console.log(throwError());

// function overloading *************************

// function combine(a:number, b:number): number;
// function combine(a:string, b:string): string;

// function combine(a: number | string , b: number | string): number | string {
//      if(typeof a === "number" && typeof b === "number"){
//           return a+b;

//      }else if (typeof a === "string" && typeof b === "string"){
//           return a + " " + b;
//      }else{
//       throwError();
//      }
// }

// console.log(combine(1,2));

// function overloading  by parameter count *************************
// function greet2(): string;
// function greet2(name:string): string;

// function greet2(name:string){
//      return `Hey ${name}.`
// }

//  console.log(greet2("Shuaib Khan"));
// function greet2(){
//      return `Hey Guest.`
// }

// console.log(greet2());

// Object with interface and type ***********************

// type UserSchema = {
//      name : string,
//      age : number,
//      gender : string,
//      position : string,
//      address : {
//           country : string,
//           province : string,
//           city : string,
//           houseNumber : number,
//           postalCode : number
//      }
// }

// interface UserSchema {
//      name : string,
//      age : number,
//      gender : string,
//      position : string,
//      address : {
//           country : string,
//           province : string,
//           city : string,
//           houseNumber : number,
//           postalCode : number
//      }
// }

// interface UserSchema {
//      name : string,
//      age : number,
//      gender : string,
//      position : string,
// }

// interface AddressSchema {
//           country : string,
//           province : string,
//           city : string,
//           houseNumber : number,
//           postalCode : number
//      }
//      interface UserSchema {
//           address : AddressSchema
//      }
// import { UserSchema as BaseUserSchema } from "./interfaces";

// interface UserSchema extends BaseUserSchema {
//   other: string;
// }

// const user: UserSchema = {
//   name: "Shuaib Khan",
//   age: 24,
//   gender: "Male",
//   position: "Web Developer",
//   address: {
//     country: "Pakistan",
//     province: "Kp",
//     city: "Swat",
//     houseNumber: 12,
//     postalCode: 19200,
//   },
//   other: "something else..",
// };

// array and tuples ***********************

// const fruitsName:string[] = ["mango", "apple"];
// const yourAges:number[] = [25,23,18,22];

// in array type inferce also work
// const names = ['shuaib', 'asim', 'zakir'];
// now number not assignable to this array

// const arr:(string | number)[] = ["shuiab", 23];

// interface UserSchema {
//      name : string,
//      age : number,
//      gender : string,
//      position : string,
//      address : {
//           country : string,
//           province : string,
//           city : string,
//           houseNumber : number,
//           postalCode : number
//      }
// }

// const users : UserSchema[] = [
//      {
//   name: "Shuaib Khan",
//   age: 24,
//   gender: "Male",
//   position: "Web Developer",
//   address: {
//     country: "Pakistan",
//     province: "Kp",
//     city: "Swat",
//     houseNumber: 12,
//     postalCode: 19200,
//   },

// },
//      {
//   name: "Shuaib Khan",
//   age: 24,
//   gender: "Male",
//   position: "Web Developer",
//   address: {
//     country: "Pakistan",
//     province: "Kp",
//     city: "Swat",
//     houseNumber: 12,
//     postalCode: 19200,
//   },

// },
//      {
//   name: "Shuaib Khan",
//   age: 24,
//   gender: "Male",
//   position: "Web Developer",
//   address: {
//     country: "Pakistan",
//     province: "Kp",
//     city: "Swat",
//     houseNumber: 12,
//     postalCode: 19200,
//   },

// },
//      {
//   name: "Shuaib Khan",
//   age: 24,
//   gender: "Male",
//   position: "Web Developer",
//   address: {
//     country: "Pakistan",
//     province: "Kp",
//     city: "Swat",
//     houseNumber: 12,
//     postalCode: 19200,
//   },

// }
// ]

// const users: {name:string, age:number}[] = [
//      {name: "Shuaib1", age : 12},
//      {name: "Shuai2", age : 12},
//      {name: "Shuaib3", age : 12},
//      {name: "Shuaib4", age : 12},
//      {name: "Shuaib5", age : 12},
// ]
// console.log(users);

// tuples *************************

// const person : [string, string, number] = ['shuaib', 'kp',24];
// console.log(person);

// enums ************************
// enum Status {
// Pending = 0,
// Success = 1,
// Error = 2
// }

// let state : Status = 2;
// console.log(state);

// enum PaymentStatus {
//   PAID = "paid",
//   UNPAID = "unpaid",
//   FAILED = "failed"
// }

// let status: PaymentStatus = PaymentStatus.UNPAID;
// console.log(status);

// type casting / assertion

// function addOrContact(num1:number, num2:number, value:"add" | "contact"): number | string{
//      if(value === "add"){
//           return num1 + num2;
//      }
//      return "" + num1 + num2;
// }

// const resultInStr = addOrContact(4,5, 'contact') as string;
// const resultInNum= addOrContact(4,5, 'add') as number;
// const resultInNum2= <number>addOrContact(4,5, 'add');
// console.log(resultInNum);

// const form = document.getElementById("myForm")! as HTMLInputElement;
//       const resultPara = document.getElementById("result") as HTMLElement;
//       const inputOne = document.getElementById("value1")! as HTMLInputElement;
//       const inputTwo = document.getElementById("value2")! as HTMLInputElement

//       form.addEventListener("submit", function (e) {
//           e.preventDefault();

//           const val1 = inputOne.value;
//           const val2 = inputTwo.value;

//           resultPara.textContent = `Value 1: ${val1}, Value 2: ${val2}`;
//       });

// classes **********************************

interface IAnimal {
  name : string;
  age : number;
  isCute : boolean;
}

// class Animal implements IAnimal {
//   public readonly name: string;
//   public age: number;
//   public isCute: boolean;
//   private isHungry: boolean = true;
//   protected luckyNum: number = 7
//   constructor(name: string, age: number, isCute: boolean) {
//     console.log(this.luckyNum);
    
//     this.name = name;
//     this.age = age;
//     this.isCute = isCute;
//   }
// public get  hungryStatus():string{
//   return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
// public set  feed(food:string){
//     this.isHungry = false;
//     console.log(`${this.name} has been feed with ${food}`);
    
//   }
// }
class Animal implements IAnimal {
  private isHungry: boolean = true;
  protected luckyNum: number = 7
  constructor(public name: string, public age: number, public isCute: boolean) {
  }
public get  hungryStatus():string{
  return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
  }
public set  feed(food:string){
    this.isHungry = false;
    console.log(`${this.name} has been feed with ${food}`);
    
  }
}
class Dog extends Animal{
  skills: string[];
  constructor(name: string, age: number, isCute:boolean, skills:string[]) {
    super(name, age, isCute);    
      console.log(this.luckyNum);
    this.skills = skills;
  }
}

// const tom = new Animal("Cat", 12, true);
// console.log(tom.hungryStatus);
// tom.feed = "bread";
// console.log(tom.hungryStatus);

const doggy = new Dog("tom", 3, true, ['sit', 'come']);
console.log(doggy);


// Variable *************************
// let firstName : string = "Shuaib";
// console.log(firstName);
// let age : number = 24;
// console.log(age);
// let isMale : boolean = true;
// console.log(isMale);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// class Animal implements IAnimal {
//   private isHungry: boolean = true;
//   protected luckyNum: number = 7
//   constructor(public name: string, public age: number, public isCute: boolean) {
//   }
// public get  hungryStatus():string{
//   return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
// public set  feed(food:string){
//     this.isHungry = false;
//     console.log(`${this.name} has been feed with ${food}`);
//   }
// }
// class Dog extends Animal{
//   skills: string[];
//   constructor(name: string, age: number, isCute:boolean, skills:string[]) {
//     super(name, age, isCute);    
//       console.log(this.luckyNum);
//     this.skills = skills;
//   }
// }
// const tom = new Animal("Cat", 12, true);
// console.log(tom.hungryStatus);
// tom.feed = "bread";
// console.log(tom.hungryStatus);
// const doggy = new Dog("tom", 3, true, ['sit', 'come']);
// console.log(doggy);
// Generics
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        if (!res.ok) {
            throw new Error("Something went wrong..");
        }
        const data = yield res.json();
        return data;
    });
}
const result = fetchData("https://jsonplaceholder.typicode.com/todos");
result.then((d) => {
    console.log(d[0]);
});
export {};

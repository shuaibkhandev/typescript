// Variable *************************
// let firstName : string = "Shuaib";
// console.log(firstName);
// let age : number = 24;
// console.log(age);
// let isMale : boolean = true;
// console.log(isMale);
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
class Animal {
    constructor(name, age, isCute) {
        this.name = name;
        this.age = age;
        this.isCute = isCute;
        this.isHungry = true;
        this.luckyNum = 7;
    }
    get hungryStatus() {
        return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
    }
    set feed(food) {
        this.isHungry = false;
        console.log(`${this.name} has been feed with ${food}`);
    }
}
class Dog extends Animal {
    constructor(name, age, isCute, skills) {
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
export {};

// Basic Types
let id: number = 5;
let company: string = "economize.cloud";
let isPublished: boolean = true;
let x: any = "Hello"
// x = true;    no error as type is "any"
let age: number = 20;
let ids: number[] = [1, 2, 3, 4, 5, 6];
// ids.push("Hello");  //string type gives error
let arr: any[] = [1, 2, 3, 4, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Hey", false];
// let person: [number, string, boolean] = [1, true, 20];
//error: types specified for particular value

// Tuple Array
let employee: [number, string][]
employee = [
    [1, "Ayush"],
    [2, "Soni"],
    [3, "Chinu"],
];

// Union
let product_id: string | number = 22;
product_id = "Hello";

// Enum or Enumerated Type : It allow us to define a set of named constants either numeric or string
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);

// Objects
const user: {
    id: number,
    name: string,
    isCompleted: boolean
} = {
    id: 1,
    name: "John",
    isCompleted: true
}

// In-short
type User = {
    id: number,
    name: string,
    isCompleted: boolean
}

const user1: User = {
    id: 1,
    name: "Doe",
    isCompleted: false
}

// Type Assertion : Two ways to insert type
let cid: any = 1;
let customerId1 = <number>cid
let customerId2 = cid as number

// Functions
function addNum(x: number, y:number):number {
    return x + y;
}
console.log(addNum(5, 5));

function log(message: string | number):void {
    console.log(message);
}
console.log(log(10));


// Interfaces : It is a custom type or speific structure to an object or a function 
interface UserInterface{
    readonly id: number,
    name: string,
    age?: number
    // ? used for optional 
}

const user2: UserInterface = {
    id: 1,
    name: "Doe",
}

// user2.id = 5;
// cannot read re-assign if readonly is written

type Point = string | number
const p1: Point = 1;
// Cannot use with primitives or with unions


// Interfaces Function
interface MathFunc{
    (x:number , y: number):number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y



// Classes
class Person {
    // private id: number
    // protected id: number
    public id: number
    name: string

    constructor(id: number, name:string) {
        console.log(123)
        this.id = id,
        this.name = name
    }
    register() {
        return `${this.name} is now registered`
    }
}
const Ayush = new Person(1,"Hey");
const Chinu = new Person(10, "Hello");

console.log(Ayush.register())
//console.log(Ayush.id);   //cannot use as it is private in class
console.log(Ayush, Chinu);



// Classes using Interface

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person1 implements PersonInterface{
    // private id: number
    // protected id: number
    public id: number
    name: string

    constructor(id: number, name:string) {
        console.log(123)
        this.id = id,
        this.name = name
    }
    register() {
        return `${this.name} is now registered`
    }
}
const AyushS = new Person1(1,"Hey");
const ChinuS = new Person1(10, "Hello");



// Extending Classes : SubClasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3, "Joey", "Developer")
console.log(emp.name);
console.log(emp.register());



// Generics : Basically used to build reusable components or a placholder for types

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["Ayush", "Soni", "Chinu"]);

numArray.push(10);
strArray.push("10");
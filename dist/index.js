"use strict";
// Basic Types
let id = 5;
let company = "economize.cloud";
let isPublished = true;
let x = "Hello";
// x = true;    no error as type is "any"
let age = 20;
let ids = [1, 2, 3, 4, 5, 6];
// ids.push("Hello");  //string type gives error
let arr = [1, 2, 3, 4, true, "Hello"];
// Tuple
let person = [1, "Hey", false];
// let person: [number, string, boolean] = [1, true, 20];
//error: types specified for particular value
// Tuple Array
let employee;
employee = [
    [1, "Ayush"],
    [2, "Soni"],
    [3, "Chinu"],
];
// Union
let product_id = 22;
product_id = "Hello";
// Enum or Enumerated Type : It allow us to define a set of named constants either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);
// Objects
const user = {
    id: 1,
    name: "John",
    isCompleted: true
};
const user1 = {
    id: 1,
    name: "Doe",
    isCompleted: false
};
// Type Assertion : Two ways to insert type
let cid = 1;
let customerId1 = cid;
let customerId2 = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 5));
function log(message) {
    console.log(message);
}
console.log(log(10));
const user2 = {
    id: 1,
    name: "Doe",
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        console.log(123);
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Ayush = new Person(1, "Hey");
const Chinu = new Person(10, "Hello");
console.log(Ayush.register());
//console.log(Ayush.id);   //cannot use as it is private in class
console.log(Ayush, Chinu);
class Person1 {
    constructor(id, name) {
        console.log(123);
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const AyushS = new Person1(1, "Hey");
const ChinuS = new Person1(10, "Hello");
// Extending Classes : SubClasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Joey", "Developer");
console.log(emp.name);
console.log(emp.register());
// Generics : Basically used to build reusable components or a placholder for types
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Ayush", "Soni", "Chinu"]);
numArray.push(10);
strArray.push("10");

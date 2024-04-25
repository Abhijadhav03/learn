# primitive 

// 7 types :string , numbers, boolean, null, undefined,symbol,bigint
const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsidetemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')
console.log(id === anotherId);

const bigNumber = 34557767777777774n

// reference type (non primitive)

// array, objects , functions

const heros = ["shaktiman", "ironman", "hulk"]
let myObj= new{
    name: "abhishek",
    age: 20,
}

const myFunction = function(){
console.log("hello world");
}

console.log(typeof bigNumber);
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

//stack (primitive) ,heap(non primitve) 

//stack - copy, heap = refernce

let myYoutubename = "abhishekjadhav"

let anothername =  myYoutubename
anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubename);


let userone = { 
    email: "user@gmail.com",
    upi: "user@ybl"
}

let usertwo = userone


usertwo.email = "abhishek@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
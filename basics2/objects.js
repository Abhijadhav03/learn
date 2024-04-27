// singleton (Object.create)

//object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "abhishek",
    "fullname": "abhishek jadhav",
    age:18,
    [mySym]: "mykey1",  //used as symbol
    location:"jaipur",
    email:"abjhere7@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(typeof JsUser.mySym);
//console.log(JsUser[mySym]);

JsUser.email = "abhi@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "abhi@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



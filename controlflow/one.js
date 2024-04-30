// //if 
// const isUserloggedIn = true
// const temperature = 41 

// if (temperature>50) {
//     console.log("leass than 50");

    
// }else{
// console.log("temperature is greater than 50")
// }


// if( 2 === "2" ){
// console.log("executed");

// }
// else{
//     console.log("executed");
// }
// // 2<=2
// // 3!=2
// // <,>, <=, >= , ==, !=,===

// const score = 200

// if (score >100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
    
// }
// console.log(`user power : ${power}`);

// var datatype has global scope

// const balance = 1000
// if(balance > 500) console.log("test"),console.log("test");// implicit scope : one one line no multiple lines
// const balance =1000
// if (balance < 500) {
//     console.log("less than");

// }else if (balance <750){
//     console.log("lessthan 750");

// }else if (balance <900){
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");
// }

const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEnail = true
if(UserloggedIn && debitCard && 2==2){
    console.log("allow to buy course");
}

if (loggedInFromEnail || loggedInFromGoogle ){
    console.log("user logged in");
}

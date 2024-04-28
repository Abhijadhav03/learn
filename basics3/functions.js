

function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
}

sayMyName()

// function addTwoNumbers(number1,number2){
    
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
}
const result = addTwoNumbers(3,"a")

console.log("result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
console.log("Please enter a username");
return
    }
    
    return `${username} just logged in`

}

console.log(loginUserMessage("abhishek"))

console.log(loginUserMessage("abhi"));
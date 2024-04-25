const name = "abhishek"
const repoCount = 2

//console.log(name + repocount + " value");

console.log(`hello my name is ${name}and my repo  count is ${repoCount}`);

const gameName = new String('abhishek-ja')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   abhishek  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url =  "https://abhishek.com/abhishek%20jadhav"

console.log(url.replace('%20','-'));

console.log(url.includes('abhi'))

console.log(gameName.split('-'));

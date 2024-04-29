// immediately invoked function expressions (iife)

(function chai(){
    //named IIFE
    console.log(`db connected`);

})();
// iife is used for avoiding global scope pollution 


 (function aurcode()  {
     console.log(`DB CONNECTED TWO`);
 })();

( (name) => { 
    //Unamed IIFE
    console.log(`DB CONNECTED ThreeO ${name}`);

})('abhishek');
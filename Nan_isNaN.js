/* 
       * NaN stands for "Not-a-Number."
       * It is a special value in JavaScript indicating that a value is not a valid number.
       * It often occurs as a result of undefined or un representable mathematical operations.
*/

// Code :

let result = 10 / "apple";
console.log(result); // Output: NaN


/* 
       * isNaN is a function in JavaScript used to check if a value is NaN.
       * It returns true if the value is NaN, and false otherwise.
       
*/

// Here for "Hello" string isNaN function gives true but for string "70" isNaN gives false 
//because string "Hello" cannot be converted into number on the other string "70" can be converted in number
//so isNaN gives false if parameter of function is number of a string which converts into string

let myValue = "Hello";
console.log(isNaN(myValue)); // Output: true

let value = "70";
console.log(isNaN(value)); // Output: false  

let check = 70;
console.log(isNaN(check)); // Output: false

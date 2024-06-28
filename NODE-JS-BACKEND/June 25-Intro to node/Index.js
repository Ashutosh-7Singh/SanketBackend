// {// require(__dirname + '/searching.js')//this is for the absoute path
// // or
// // require('searching.js')//this is for the relative path

// const searching = require("./Searching.js"); //this is for the relative path

//  after this what ever the object is to be expoted is ready to consumeable
// console.log("start");
// let arr = [5, 4, 3, 5, 6, 7, 4, 3, 2, 4];
// let x = 6;

// console.log(searching);
//}
// const searching = require("./Searching.js"); //this is for the relative path

import Searching from "./Searching";
// the import gives error   (SyntaxError: Cannot use import statement outside a module) but 
// here while require is not giving error 
// so whtat is happening  when you have .js in the module then by default common JS moduling is enable so you have to do some extra effort  to Enable  the ES6 module 
// so first of all try to understand common js module 
// its like the old way module 
console.log("start");
let arr = [5, 4, 3, 5, 6, 7, 4, 3, 2, 4];
let x = 6;

console.log(searching.linear(arr.x));

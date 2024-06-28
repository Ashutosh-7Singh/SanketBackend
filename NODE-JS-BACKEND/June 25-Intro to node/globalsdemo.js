// console.log(document);
// here document is not define in the node 
// document is only defined in the browser for JS

// ************************* 
// here process is defined for the NODE

// {console.log(process);}

//this is the first global we have  i.e process global  
// go to https://nodejs.org/api/process.html#process 
// so  The process object provides information about, and control over, the current Node.js process.
//*** quesion  */
// if process is a global then why we are able to  do like 
// var process = 3; so we have to read this in module pattern 

// another globall to access the current directory in which we are trying to  run our program is 
// console.log(__dirname);// but this global is not always accessble 
//  we have to fid in which case we are not able to access the __dirname ;
// one moe global is MODULE 
console.log(module);
//  so now we have to understand the what is module 

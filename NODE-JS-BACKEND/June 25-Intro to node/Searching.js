function linearSearch(arr,x){
for(let i=0;i<arr.length;i++){
if(arr[i]===x){
    return i
}
}
return NaN;
}
function binarySearch(arr,x){

}
module.exports={
    linear:linearSearch,
    binary:binarySearch
}

//this module pattern is actually availale in two ways
// 1st-Common JS module
// 2nd-ES module
//when you see the require  syntax 
// what is require its a way of prepareing the whole module pattern in which we can consume the code written in the some other files 


// in ES module instead of using require we are using  import syntax
var array = [1,2,3,4,5,"xyz"];

if(array.includes("xyz")) {
    array.push("abc");
    console.log(array)
}else{
    console.log("Element Does Not contains xyz")
}
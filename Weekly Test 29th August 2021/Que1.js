// callback function - A callback is a function passed as an argument to another function.
//Code example: -

let sum = (a,b,callBack) => {
    callBack(a+b);
}

let display = (a) => {
    console.log(a)
}

sum(3,2,display)
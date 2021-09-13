// recursion is calling function in its own definition.

function factorial(a){
    if(a==1){
        return 1;
    }
    return factorial(a-1) * a;

}

console.log(factorial(2))
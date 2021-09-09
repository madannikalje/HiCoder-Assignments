let data = {
    a:5,
    b:10
};

function swap(data){
    let c = data.a;
    data.a=data.b;
    data.b=c;
}
swap(data)
console.log(data)

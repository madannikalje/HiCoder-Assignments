let str  = "hello world!".split("");
let strL = str.length;
let revStr = "";
for(let i = 0; i < strL; i++) {
    revStr += str.pop();
}
console.log(revStr)
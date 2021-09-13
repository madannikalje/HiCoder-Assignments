cookie="id=a3fWa;Expires=Thu, 21 Oct 2021 07:28:00 GMT;Works=HttpOnly"
// console.log(cookie.split(";"))
let obj = {};
cookie.split(";").forEach(a => {
    // a.split("=").forEach(b => console.log(b))
    // console.log(a.split("=")) 
    obj[a.split("=")[0]] = a.split("=")[1]    
})


//To get output which is mentioned in questio hardcoding is required.

console.log("id is "+ obj["id"])
console.log("Expires at "+ obj["Expires"])
console.log("Works on "+ obj["Works"])
let arr = [1,2,3,4,5,6,7,8,9]
let stackArr = [];
let elementsContainer = document.getElementsByClassName("elements")[0];
let counter = -1;

arr.forEach((arrElement) => {
    let elementDiv = document.createElement("div")
    elementDiv.className = "element";
    let pTag = document.createElement("p")
    pTag.innerText = arrElement
    elementDiv.appendChild(pTag)
    elementsContainer.appendChild(elementDiv)
})

let stackContainer = document.getElementsByClassName("stack-elements")[0];



document.addEventListener("click",(elem) => {

    if(elem.target.id == "push-btn"){
        counter++;
        if(stackArr.length >= arr.length){
            console.log("overFlow")
            document.getElementById("stack-info").innerHTML = "Stack Overflow";
            setTimeout(() => {
                document.getElementById("stack-info").innerHTML = "Stack";
            },500)
        }else{
            document.getElementById("stack-info").innerHTML = "Stack";
            stackArr.push(arr[stackArr.length])
            stackContainer.innerHTML = "";
            stackArr.forEach((arrElement) => {
            let elementDiv = document.createElement("div")
            elementDiv.className = "stack-element";
            let pTag = document.createElement("p")
            pTag.innerText = arrElement
            elementDiv.appendChild(pTag)
            stackContainer.appendChild(elementDiv)
        })
        }
    }else  if(elem.target.id == "pop-btn"){
        if(stackArr.length <= 0){
            console.log("underFlow")
            document.getElementById("stack-info").innerHTML = "Stack Underflow";
            setTimeout(() => {
                document.getElementById("stack-info").innerHTML = "Stack";
            },500)
        }else{
            document.getElementById("stack-info").innerHTML = "Stack";
            stackArr.pop()
            stackContainer.innerHTML = "";
            stackArr.forEach((arrElement) => {
            let elementDiv = document.createElement("div")
            elementDiv.className = "stack-element";
            let pTag = document.createElement("p")
            pTag.innerText = arrElement
            elementDiv.appendChild(pTag)
            stackContainer.appendChild(elementDiv)
        })
        }

    }
})

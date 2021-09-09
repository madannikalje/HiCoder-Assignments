let arr = [];
var queueParentDiv = document.getElementsByClassName('queue-elements')[0];
let i = document.getElementsByTagName("input")[0];
i.addEventListener("keypress",(a) => {
    i.style.boxShadow = "0 8px 32px 10px rgba(188, 188, 170, 0.948)";
    console.log(a.key)
    setTimeout(() => {
        i.style.boxShadow = "";
    },300)
})
document.addEventListener("click", (e) => {
    if(e.target.id == "push-btn"){
        if(arr.length == 6){
            alert("Reached Maximun Limit");
        }else{
            if(i.value == ""){
                alert("Please Enter Something");
            }else{
                queueParentDiv.innerHTML = "";
                arr.push(i.value);
                arr.forEach((element) => {
                    queueParentDiv.appendChild(createElementDiv(element))
                })
            }
        }
    }else if(e.target.id == "pop-btn"){
        if(arr.length == 0){
            alert("Empty Queue");
        }else{
            arr.shift();
            queueParentDiv.innerHTML = "";
            arr.forEach((element) => {
                queueParentDiv.appendChild(createElementDiv(element))
            })
            
        }
    }
})

let createElementDiv = (element) => {
    let childDiv = document.createElement("div")
    childDiv.className = "queue-element"
    let p = document.createElement("p")
    p.innerText = element;
    childDiv.appendChild(p)
    return childDiv;
}

/* 
    
    <div class="queue-element"> 
        <p>  1  </p>
    </div>

*/
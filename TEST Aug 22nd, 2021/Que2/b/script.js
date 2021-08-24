var elem = document.querySelector(".row")
var getAllSiblings = elem => {
    let allSiblings = [];
    let parent = elem.parentNode;
    let a = parent.firstChild;
    while(a != null ){
        allSiblings.push(a);
        a = a.nextSibling;
    }
    return allSiblings;
}

let allSiblings = getAllSiblings(elem);

allSiblings.forEach(a => {
    let child = a.firstChild;
    console.log("Childs Of " + a + " : ")
    while((child != null )){
        console.log(child);
        child = child.nextSibling;
    }
})
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
console.log("All Siblings")
console.log(getAllSiblings(elem));
var elem =  document.getElementById("f");

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

console.log(getAllSiblings(elem));


document.addEventListener("DOMContentLoaded", () => {
    let root = document.querySelector(".root");
    root.append(createHtml())
})

var createHtml = () => {
    var ulElement = document.createElement("ul");
    ulElement.setAttribute("id","menu");
    var innerContent = ["Home","About","Services","Contact"];
    innerContent.forEach(a => {
        let liElement = document.createElement("li");
        liElement.innerHTML = a;
        ulElement.appendChild(liElement);
    })
    return ulElement;
};

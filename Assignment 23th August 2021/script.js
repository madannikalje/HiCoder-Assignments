//find get element with class name.
// Source: https://stackoverflow.com/a/21436552 .
let skillElement = document.getElementsByClassName('skill');
skillElement.addEventListener('hover',() => {
    skillElement.style.background = "linear-gradient(90deg, rgba(153, 31, 31, 0.486) 70%, rgba(160, 33, 33, 0.05) 30%)"   
})
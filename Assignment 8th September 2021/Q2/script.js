document.addEventListener("DOMContentLoaded",() => {
    let element = document.getElementsByClassName("img")[0]
    element.innerText = "Adding image Dynamically ..."
    setTimeout(() => {
        element.innerText = "";
        element.innerHTML = `<img src="https://www.gstatic.com/webp/gallery/1.jpg" />`;
        // element.style.background = "url('https://picsum.photos/seed/picsum/200/300')"
    },1000)
})
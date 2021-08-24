let img = document.getElementById("img1");
let imgShow = document.getElementById("imgShow")

img.addEventListener("change", e =>{
    console.log( e.target.files[0])
    let img = URL.createObjectURL(e.target.files[0])
    imgShow.hidden = false
    imgShow.setAttribute("src",img)
})
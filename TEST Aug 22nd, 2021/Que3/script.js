var heightSlider = document.getElementById("Height");
var widthSlider = document.getElementById("width");
var positionSlider = document.getElementById("position");
var img = document.getElementsByTagName("img")[0]
heightSlider.oninput = () => {
    let val = parseInt(heightSlider.value);
    img.style.height = `${val}px`
}

widthSlider.oninput = () => {
    let val = parseInt(widthSlider.value);
    img.style.width = `${val}px`
}

positionSlider.oninput = () => {
    let val = parseInt(positionSlider.value);
    img.style.left = `${val}px`
}
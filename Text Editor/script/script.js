const textField = document.getElementById("text-field");


document.getElementById("font-style-italic").addEventListener("click", function () {
    if (getComputedStyle(textField).fontStyle == 'normal') {
        textField.style.fontStyle = 'italic'
    } else {
        textField.style.fontStyle = 'normal'
    }
});
document.getElementById("font-style-bold").addEventListener("click", function () {
    console.log(getComputedStyle(textField).fontWeight)
    if (getComputedStyle(textField).fontWeight == '400') {
        textField.style.fontWeight = 'bold'
    } else {
        textField.style.fontWeight = 'normal'
    }
});
document.getElementById("font-style-underline").addEventListener("click", function () {
    if (getComputedStyle(textField).textDecoration.includes("underline")) {
        textField.style.textDecoration = "none";
    } else {
        textField.style.textDecoration = 'underline'
    }
});

// Align
function alignText(align) {
    textField.style.textAlign = align;
}

document.getElementById("text-align-left").addEventListener("click", function () {
    alignText("left");
});
document.getElementById("text-align-center").addEventListener("click", function () {
    alignText("center");
});
document.getElementById("text-align-right").addEventListener("click", function () {
    alignText("right");
});

// font-size
function fontSizeChange(size) {
    textField.style.fontSize = size + 'px';
}
document.getElementById("font-size").addEventListener("change", function (event) {
    fontSizeChange(event.target.value)
});

// Color Change
document.getElementById("text-color").addEventListener("change", function (event) {
    textField.style.color = event.target.value;
});
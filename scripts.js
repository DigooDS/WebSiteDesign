let circle = document.getElementById("circle")
let upButton = document.getElementById("upButton")
let downButton = document.getElementById("downButton")

let rotateValue = circle.style.transform
let rotateSum

upButton.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)"
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}

downButton.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)"
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}
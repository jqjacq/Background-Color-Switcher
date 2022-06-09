const colorsbutton = document.getElementById("colorsbutton")
const body = document.querySelector("body")
const colorword = document.getElementById("colorchange")
const red = document.getElementById("red")
const orange = document.getElementById("orange")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const purple = document.getElementById("purple")

red.addEventListener('click', changeToRed)
function changeToRed() {
    body.style.backgroundColor = "rgb(246, 55, 55)"
    colorword.innerHTML = "Red"
}
function changeToOrange() {
    body.style.backgroundColor = "rgb(247, 180, 56)"
    colorword.innerHTML = "Orange"
}
function changeToYellow() {
    body.style.backgroundColor = "rgb(255, 255, 192)"
    colorword.innerHTML = "Yellow"
}
function changeToGreen() {
    body.style.backgroundColor = "rgb(56, 241, 56)"
    colorword.innerHTML = "Green"
}
function changeToBlue() {
    body.style.backgroundColor = "rgb(99, 168, 237)"
    colorword.innerHTML = "Blue"
}
function changeToPurple() {
    body.style.backgroundColor = "rgb(185, 118, 185)"
    colorword.innerHTML = "Purple"
}

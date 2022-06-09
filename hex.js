const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const colorbutton = document.getElementById("colorbutton")
const colorword = document.getElementById("colorchange")
const body = document.querySelector("body")

colorbutton.addEventListener('click', function() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()];
    }

    colorword.textContent = hexColor;
    body.style.backgroundColor = hexColor;
})

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}
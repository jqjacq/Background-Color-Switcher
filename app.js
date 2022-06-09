const colorbutton = document.getElementById("colorbutton")
const colorword = document.getElementById("colorchange")
const colors = [
       "rgb(246, 55, 55)", //Red
       "rgb(247, 180, 56)", //Orange
       "rgb(255, 255, 192)", //Yellow
       "rgb(56, 241, 56)", //Green
       "rgb(99, 168, 237)", //Blue
       "rgb(185, 118, 185)" //Purple
    ]
    
colorbutton.addEventListener('click', function() {
    const getRandomNumber = randomNumber();
    document.body.style.backgroundColor = colors[getRandomNumber]
    colors[0] = "Red"
    colors[1] = "Orange"
    colors[2] = "Yellow"
    colors[3] = "Green"
    colors[4] = "Blue"
    colors[5] = "Purple"
    colorword.textContent = colors[getRandomNumber]
})

function randomNumber() {
    return Math.floor(Math.random() * colors.length)
}
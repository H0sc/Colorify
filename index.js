const circle = document.getElementById("circleID")
const buttons = document.querySelectorAll("button")

function loopBtns () { buttons.forEach ((button) => {
    if (button.innerHTML === `change to block`) {
        button.innerHTML = `change to circle`
    } else if (button.innerHTML === `change to circle`){
        button.innerHTML = `change to block`
    }
    }) 
}

// const 

function paint (color) {
    circle.style = `background-color: ${color}`
}

function random () {
    let randomHex = Math.floor(Math.random()*16777215).toString(16)
    circle.style = `background-color: #${randomHex}` 
    console.log(randomHex)
}

function changeForm () {
    circle.style = `border-radius: 0`
    loopBtns()
}